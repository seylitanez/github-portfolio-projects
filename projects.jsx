{

    
    path:'C:/',
    type:'folder',
    content:
    [
        {type:'file',name:'browser',content:<BrowserFenetre/>,path:'C:/browser',icone:browser},
        {type:'folder',name:'games',content:[
            {type:'file',name:'arkanoid',path:'C:/games/arkanoid',icone:arkanoid},
            {type:'file',name:'pacman',path:'C:/games/packman',icone:packman},
            {type:'file',name:'fighting game',path:'C:/games/fighting game'},
            {type:'folder',name:'test',path:'C:/games/test',content:[
                {type:'folder',name:'test inside',path:'C:/games/test/test inside',content:['fffffffffffff']}
            ]}
        ],
        path:'C:/games'
        },
        {type:'file',name:'paint',content:<iframe src="https://jspaint.app" width="100%" height="100%"></iframe>,path:'C:/paint',icone:paint},
        {type:'file',name:'me',content:<FenetreMe/>,path:'C:/me',icone:smile},
        {type:'folder',name:'projects',path:'C:/projects',content:[]}

    ]

    }