window.onload = function(){

var main = new Vue({
    el: '#main',
    data:{
        refresh: false,
        active_thread: 'bob',
        user_name: 'dan',
        threads : [
            {
                thread_name: 'bob',
                messages: [
                    {
                        from: 'dan',
                        text: 'hey bob, how\'s it going?\nWhat do you want to talk about?'    
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
        changeActiveThread: function(thread_name){
            this.active_thread = thread_name;
            this.refresh = true;   
        },
        getActiveThread: function(){
            for(var i=0;i<this.threads.legnth;i++){
                if(this.threads[i].thread_name == this.active_thread){
                    return this.threads[i];    
                }    
            }
            return {};
        }
    }
});

}
