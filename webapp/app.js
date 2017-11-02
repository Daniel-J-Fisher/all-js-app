window.onload = function(){

    var main = new Vue({
        el: '#main',
        data:{
            active_thread_index: 0,
            user_name: 'dan',
            threads : [],
            new_message : ''
        },
        methods: {
            changeActiveThread: function(thread_index){
                this.active_thread_index = thread_index
                this.new_message = ''
            },
            getActiveThread: function(){
                return this.threads[this.active_thread_index]
            },
            sendMessage: function(){
                console.log(this.new_message)
                this.$http.put('/api/newMessage',{
                    user:this.user_name,
                    id:this.threads[this.active_thread_index]._id,
                    message:this.new_message
                }).then(response => {
                    this.new_message = ''
                    this.$http.get('/api/getThreadsForUser',{params: {user : this.user_name}}).then(response => {
                        this.threads = response.body
                        console.log(response.body)
                    }, response => {
                        //Error callback
                    })
                })
            }
        },
        created: function(){
            this.$http.get('/api/getThreadsForUser',{params: {user : this.user_name}}).then(response => {
                this.threads = response.body
                console.log(response.body)
            }, response => {
                //Error callback
            })
        }
    })

}
