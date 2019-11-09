

var bg = {};
    bg.colors = {
        background:"rgb(200,120,120)",

    };

    bg.views =[
          detailsViewMenu,
           new menu( //topMenu
                    {
                      grid:{x:100,y:100,sizeX:1000,sizeY:1000},
                      art:new art({bgColor:bg.colors.background,bgShape:"rectangle"}),
                    },
                    [

                                 new button ({
                                             grid:{x:0,y:-75,sizeX:250,sizeY:94},
                                             art:new art({bgColor:"rgb(0,0,0,.2)"},
                                                         {texts:["Let's Play!",""]}),
                                             click:{ action:null,
                                                     params:{},
                                                     hoverObj:{x:undefined,y:undefined,texts:["Test"]}}
                                         }
                                 ),
                                 new button ({
                                         grid:{x:250,y:0,sizeX:0,sizeY:96},
                                         art:new art({bgColor:"rgb(0,0,0,.2)"},
                                                     {texts:["",""]}),
                                          click:{ action:null,
                                           params:{},
                                           hoverObj:{texts:["Some Hover Text"]}},
                                       }
                                 ),
                                 new map({type:"predefined",
                                         art:{bgColor:"rgb(0,0,0,.0)",bgShape:"circle"},
                                         grid:{x:0,y:0,sizeX:800,sizeY:800},
                                         size:[8,8],
                                         coords:[0,0,0],
                                         displayOpt:{tileSpace:100,tileSpaceMulti:0 },
                                         tiles:makeBgTiles()
                                       }),
                                new map({type:"predefined",
                                        art:{bgColor:"rgb(0,0,0,.0)",bgShape:"circle"},
                                        grid:{x:0,y:0,sizeX:800,sizeY:800},
                                        size:[8,8],
                                        coords:[0,0,0],
                                        displayOpt:{tileSpace:100,tileSpaceMulti:0 },
                                        tiles:makeTiles(),
                                      }),
                              ]
                    ),



        ];

function makeBgTiles(){

  var backgroundTiles = [];

      backgroundTiles.push(...[0,1,0,1,0,1,0,1]);
      backgroundTiles.push(...[1,0,1,0,1,0,1,0]);
      backgroundTiles.push(...[0,1,0,1,0,1,0,1]);
      backgroundTiles.push(...[1,0,1,0,1,0,1,0]);
      backgroundTiles.push(...[0,1,0,1,0,1,0,1]);
      backgroundTiles.push(...[1,0,1,0,1,0,1,0]);
      backgroundTiles.push(...[0,1,0,1,0,1,0,1]);
      backgroundTiles.push(...[1,0,1,0,1,0,1,0]);

      for ( var i = 0 ; i < backgroundTiles.length ; i ++ ){

                if ( backgroundTiles[i] == 1 )
                {
                  backgroundTiles[i] = new gameObject ({
                      grid:{x:0,y:0,sizeX:100,sizeY:100},
                      art:new art({bgColor:"rgb(200,200,200)",bgShape:"rectangle"}),
                    });

                }else {
                  backgroundTiles[i] = new gameObject ({
                      grid:{x:0,y:0,sizeX:100,sizeY:100},
                      art:new art(
                                {bgColor:"rgb(100,100,100)",
                                  bgShape:"rectangle",
                                  }
                                ),
                    });

                }}

                return backgroundTiles;

};

function makeTiles(){

    var tiles = [];

    tiles.push(...[0,1,0,1,0,1,0,1]);
    tiles.push(...[1,0,1,0,1,0,1,0]);
    tiles.push(...[0,1,0,1,0,1,0,1]);
    tiles.push(...[0,0,0,0,0,0,0,0]);
    tiles.push(...[0,0,0,0,0,0,0,0]);
    tiles.push(...[-1,0,-1,0,-1,0,-1,0]);
    tiles.push(...[0,-1,0,-1,0,-1,0,-1]);
    tiles.push(...[-1,0,-1,0,-1,0,-1,0]);


    for ( var i = 0 ; i < tiles.length ; i ++ ){

          if ( tiles[i] == 1 )
          {
            tiles[i] = new namedObject ({
                grid:{x:0,y:0,sizeX:100,sizeY:100},
                art:new art({bgColor:"red",bgShape:"circle"}),
                name:"Red Checker"
              });

          }else if ( tiles[i] == -1 ) {
            tiles[i] = new namedObject ({
                grid:{x:0,y:0,sizeX:100,sizeY:100},
                art:new art({bgColor:"rgb(40,40,40)",bgShape:"circle"}),
                name:"Black Checker"
              });

          } else
          {
            tiles[i] = new gameObject ({
                grid:{x:0,y:0,sizeX:100,sizeY:100},
                art:new art(
                          {bgColor:"rgb(0,0,0,0.0)",
                            bgShape:"rectangle",
                            }
                          ),
              });
          }

    }

    return tiles;

}
