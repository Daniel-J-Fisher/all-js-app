window.onload = function(){

    var main = new Vue({
        el: '#main',
        data:{
            active_thread_index: 0,
            user_name: 'dan',
            threads : []    
        },
        methods: {
            changeActiveThread: function(thread_index){
                this.active_thread_index = thread_index
            },
            getActiveThread: function(){
                return this.threads[this.active_thread_index]
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
