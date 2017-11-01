window.onload = function(){

    var main = new Vue({
        el: '#main',
        data:{
            active_thread_index: 0,
            user_name: 'dan',
            threads : [
                {
                    thread_name: 'bob',
                    messages: [
                        {
                            from: 'dan',
                            timestamp: (new Date()).getTime(),  
                            text: 'hey bob, how\'s it going? What do you want to talk about?'
                        },
                        {
                            from: 'bob',
                            text: 'Dan, hi! We have not talked in a while'
                        }
                    ]    
                },
                {
                    thread_name: 'general',
                    messages: []    
                },
                {
                    thread_name: 'random',
                    messages: []    
                }
            ]    
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
            this.$http.get('/api/getThreadsForUser',{params: {user_name : this.user_name}}).then(response => {
                //reponse.body will have the threads array
                console.log(response.body)
            }, response => {
                //Error callback
            })
        }
    })

}
