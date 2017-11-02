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
                this.new_message = ''
            }
        },
        created: function(){
            this.$http.get('/api/getThreadsForUser',{params: {user : this.user_name}}).then(response => {
                //reponse.body will have the threads array
                this.threads = response.body
                console.log(response.body)
            }, response => {
                //Error callback
            })
        }
    })

}
