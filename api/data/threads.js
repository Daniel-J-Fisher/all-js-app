[
    {
        users : ['dan','bot'],
        messages : [
            {
                from : 'dan',
                timestamp : (new Date()).getTime(),
                text: 'Bot, why are yoy tlaking to me!?'    
            },
            {
                from : 'bot',
                timestamp : (new Date((new Date()).getTime()-60*1000)).getTime(),
                text: 'Beep boop!'
            },
            {
                from : 'bot',
                timestamp : (new Date((new Date()).getTime()-120*1000)).getTime(),
                text: 'beeeeeep'
            }
        ]
    },
    {
        users : ['dan','josh','ricky'],
        messages : [
            {
                from : 'dan',
                timestamp : (new Date((new Date()).getTime()-24*60*60*1000)).getTime(),
                text : 'Hey guys, we should prep for this presentation'
            }
        ]
    }
]
