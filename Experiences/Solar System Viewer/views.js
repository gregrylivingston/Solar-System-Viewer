
var myViews = {};
    myViews.scroller = new scrollMenu();



// - so declare it first to make it definivitive?  Probably still needs to be resized from time to time.  IE - game menu logic needs to change to fix this scrolling bug???
  myViews.scienceView = scienceViewHolder;


myViews.solarSystem =  new menu( { //Center Panel
                            grid:{x:100,y:100,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                            art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                          },
                          [new orbitSystem({size:[11,1],displayOpt:{tileSpace:500,tileSpaceMulti:.3 }},
                            [
                                                    new planet ("Sun","S",200,colorCollection.SunFire,[],"Star",planetDescriptions[0],
                                                              new surfaceMap (
                                                                            {
                                                                              tileset:{tiles:[25],odds:[2000],seed:[999,0,0]},
                                                                            }
                                                                          ),
                                                    ),
                                                    new planet ("Mercury","m",4,"rgb(140,100,80)",mercuryOrbits , "Planet", planetDescriptions[1],
                                                          new surfaceMap ( {tileset:{tiles:[24,23,15,16],odds:[1000,50,20,50],seed:[999,0,1]},})),
                                                    //null,
                                                    new planet ("Venus","v",14,colorCollection.VenusDust,venusOrbits , "Planet", planetDescriptions[2],
                                                          new surfaceMap ( {tileset:{tiles:[24,23,15,16],odds:[1000,50,20,50],seed:[999,0,2]},})),
                                                    //null,
                                                    new planet ("Earth","E",16,"rgb(100,150,200)",earthOrbits , "Planet", planetDescriptions[3],
                                                          new surfaceMap ( {tileset:{tiles:[0,3,4,5,6,8,9],odds:[2500,20,20,40,20,20,20],seed:[999,0,3]},})),
                                                    new planet ("Mars","M",15,"rgb(154,20,38)",marsOrbits , "Planet" ,planetDescriptions[4],
                                                          new surfaceMap ( {tileset:{tiles:[24,23,3,14,16],odds:[2000,50,5,5,50],seed:[999,0,5]},})),
                                                    new planet ("Ceres","a",4,colorCollection.AsteroidGrey,asteroidOrbits,"Orbit" ,planetDescriptions[5],
                                                          new surfaceMap ( {tileset:{tiles:[10,13,14,20],odds:[10,25  ,10,3000],seed:[999,0,4]},})),
                                                    new planet ("Jupiter","J",70,colorCollection.Sand,jupiterOrbits ,"Planet",planetDescriptions[6],
                                                          new surfaceMap ( {tileset:{tiles:[26],odds:[2000],seed:[999,0,6]},})),
                                                    new planet ("Saturn","s",50,colorCollection.Sand,saturnOrbits , "Planet",planetDescriptions[7],
                                                          new surfaceMap ( {tileset:{tiles:[26],odds:[2000],seed:[999,0,7]},})),
                                                    new planet ("Uranus","s",45,"rgb(80, 140, 180)",saturnOrbits , "Planet",planetDescriptions[8],
                                                                new surfaceMap ( {tileset:{tiles:[26],odds:[2000],seed:[999,0,7]},})),
                                                    new planet ("Neptune","s",40,"rgb(80, 140, 180)",saturnOrbits , "Planet",planetDescriptions[9],
                                                              new surfaceMap ( {tileset:{tiles:[26],odds:[2000],seed:[999,0,7]},})),
                                              ]),

                          //clearly binding the scrolling to ALL maps is a problem

                                                                                   ]);
                           //solarSystem


       myViews.galaxy =  new menu( { //Center Panel
                                   grid:{x:100,y:100,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                                   art:new art({bgColor:camera.menuColor,bgShape:"rectangle"
                                   })
                                 },[
                                      new gameObject(
                                        {
                                          grid:{x:0,y:0,sizeX:1000,sizeY:1000},
                                          art:{ dec:
                                                function (){
                                                         console.log("hello");
//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

                                                         var img = new Image();
                                                         img.src = "Experiences/Solar System Viewer/galaxy.jpg";
                                                         img.sx = window.innerWidth*.75-112;
                                                  //       img.onload = function () {
                                                           ctx.drawImage(img, 200, 200,1400,1000,100,100,window.innerWidth*.75-112,window.innerHeight-200);
                                                  //     }
                                                }
                                          }}),
                                          new button({
                                              grid:{x:200,y:200,sizeX:100,sizeY:100},
                                              art:{bgShape:"poi",bgColor:"white"},
                                              click:{action:selectRegion,params:{view:myViews.solarSystem,scroller:[true,true]},hoverObj:{texts:["Star System"]}}

                                          })
                                 ]
                               );



                                 //clearly binding the scrolling to ALL maps is a problem




 function planetButtons( planets){

    var myButtons = [];

    for ( var i = 0 ; i < planets.length ; i ++ ){
                myButtons.push(new button (
                               {art:{bgColor:"rgb(0,0,0,0)",bgShape:"rectangle",
                                       texts:planets[i].name,
                                       textColor:"black",
                                       textOffset:[10,10]},
                               grid:{x:0,y:i*35+40,sizeX:200,sizeY:30},
                               click:{ action:selectPlanet,
                                       params:{item:planets[i]},
                                       hoverObj:{x:undefined,y:undefined,texts:["Select " + planets[i].name]}}
                                     })
              )

    }
    return myButtons

 }


  myViews.panelView =   new menu({
                                                        art:{bgColor:"rgb(0,0,0,.1)",bgShape:"rectangle"},
                                                        grid:{x:window.innerWidth*.75 ,y:window.innerHeight/2,sizeX:window.innerWidth*.25-32,sizeY:window.innerHeight/2-94},
                                                       },
                                                                  [new gameObject (
                                                                                 {art:{bgColor:"rgb(0,0,0,0)",bgShape:"rectangle",
                                                                                         texts:"Points of Interest",
                                                                                         textColor:"black",
                                                                                         textOffset:[10,10]},
                                                                                 grid:{x:0,y:0,sizeX:200,sizeY:40},

                                                                               }),


                                                                    ...planetButtons(myViews.solarSystem.objects[0].tiles),

                                                                  ]);



//basically this feeds in the game view data right now.  Let's find smarter ways to handle it!
  myViews.detailsMenu = detailsViewMenu;
  /*new menu(
    { //RightPanelMenu
                  grid:{x:window.innerWidth*.75+6,y:100,sizeX:window.innerWidth*.8-100,sizeY:window.innerHeight-200},
                  art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                },
                [
                        new gameObject ({ //gameObject
                                grid:  {x:6 , y:56 , sizeX:304 , sizeY:304},
                                art:new art({bgColor:"black",bgShape:"rectangle"},)
                        }),
                        new gameObject ({ //gameObject
                                grid:  {x:8 , y:58 , sizeX:300 , sizeY:300},
                                art:new art({bgColor:"white",bgShape:"circle"})
                          }),
                        new gameObject ({ //gameObject
                                grid:  {x:8 , y:0 , sizeX:300 , sizeY:100},
                                art:new art({bgColor:"rgb(0,0,0,.0)",bgShape:"rectangle"},{texts:[camera.selectedItem.name,""],textColor:"black"})
                          }),

                ]);
*/
 myViews.topView =     new menu( //topMenu
                       {
                         grid:{x:100,y:0,sizeX:500,sizeY:94},
                         art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                       },
                       [
                                    new gameObject ({
                                            grid:{x:0,y:0,sizeX:500,sizeY:94},
                                            art:new art({bgColor:"rgb(0,0,0,0)",bgShape:"rectangle"},)
                                          }
                                    ),
                                    new button ({
                                                grid:{x:0,y:0,sizeX:250,sizeY:94},
                                                art:new art({bgColor:"rgb(0,0,0,0)"},
                                                            {texts:"Cosmic Explorer",textColor:"black"}),
                                                click:{ action:null,
                                                        params:{},
                                                        hoverObj:{x:undefined,y:undefined,texts:[""]}}
                                            }
                                    ),
                                    new button ({
                                            grid:{x:window.innerWidth/2,y:0,sizeX:0,sizeY:96},
                                            art:new art({bgColor:"rgb(0,0,0,0)"},
                                                        {texts:[camera.selectedLevel.name,""],textColor:"black"}),
                                             click:{ action:null,
                                              params:{},
                                              hoverObj:{texts:["The last selected celestial object"]}},
                                          }
                                    )
                      ]
                   );

camera.selectedItem = myViews.solarSystem.objects[0].tiles[0];
var selectedPlanet =myViews.solarSystem.objects[0].tiles[3];

  myViews.menuViews = new menu( { //bottomMenu
          grid:{x:(window.innerWidth*.75)/2-150,y:window.innerHeight-100,sizeX:400,sizeY:100},
          art:new art({bgColor:"rgb(0,0,0,.3)",bgShape:"rectangle"}),
  },
        [
              new button ({ //gameObject
                      grid:  {x:0, y:0 , sizeX:100 , sizeY:100},
                      art:new art({bgColor:camera.menuColor,bgShape:"galaxy"}),
                      click:{action:selectRegion,
                             params:{view:myViews.galaxy,scroller:[false,false]},
                             hoverObj:{texts:["Galaxy"]}}
              }),
              new button ({ //gameObject
                      grid:  {x:116 , y:16 , sizeX:66 , sizeY:66},
                      art:new art({bgColor:camera.menuColor,bgShape:"circle",fill:false}),
                      click:{action:selectRegion,params:{view:myViews.solarSystem,scroller:[true,true]},hoverObj:{texts:["Star System"]}}
              }),

              new button ({ //gameObject
                      grid:  {x:216, y:16 , sizeX:66 , sizeY:66},
                      art:new art({bgColor:camera.menuColor,bgShape:"orbit"}),
                      click:{action:selectPlanet,params:{item:camera.selectedLevel,scroller:[true,true]},hoverObj:{texts:["Orbital System"]}}
              }),
              new button ({ //gameObject
                      grid:  {x:316, y:16, sizeX:66 , sizeY:66},
                      art:new art({bgColor:camera.menuColor,bgShape:"circle"}),
                      click:{action:selectRegion,params:{view:selectedPlanet.map,scroller:[true,true]},hoverObj:{texts:["View Surface"]}}
              }),
    /*          new button ({ //gameObject
                      grid:  {x:416, y:16, sizeX:66 , sizeY:66},
                      art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                      click:{action:selectRegion,params:{view:myViews.surfaceView,scroller:[true,true]},hoverObj:{texts:["Surface"]}}
              }),*/]);

      myViews.settings =  new menu( { //bottomMenu
              grid:{x:window.innerWidth*.85/2-200,y:window.innerHeight/2-200,sizeX:400,sizeY:400},
              art:new art({bgColor:"rgb(0,0,0,0.0)",bgShape:"rectangle"}),
              },
                [
                  new button ({ //gameObject
                          grid:  {x:50, y:200, sizeX:100 , sizeY:80},
                          art:new art({bgColor:camera.menuColor,bgShape:"rectangle"},{texts:["","  Cancel",""]}),
                          click:{action:function (){     camera.views.pop(); },params:{},hoverObj:{texts:["Return?"]}}
                  }),
                  new button ({ //gameObject
                          grid:  {x:250, y:200, sizeX:100 , sizeY:80},
                          art:new art({bgColor:camera.menuColor,bgShape:"rectangle"},{texts:["","    Quit",""]}),
                          click:{action:topInit,params:{},hoverObj:{texts:["Quit?"]}}
                  }),


              ]);

  myViews.centerPanelMask =  new menu( { //bottomMenu
          grid:{x:0,y:0,sizeX:camera.w,sizeY:camera.h},
          art:new art({bgColor:"rgb(0,0,0,1)",bgShape:"rectangle"}),
          },
            [
              new gameObject ({ //gameObject
                      grid:  {x:0 , y:0 , sizeX:2000 , sizeY:100},
                      art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
              }),
              new gameObject ({ //gameObject
                      grid:  {x:0 , y:0 , sizeX:100 , sizeY:2000},
                      art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
              }),
              new gameObject ({ //gameObject
                      grid:  {x:window.innerWidth*.75 -14 , y:0 , sizeX:2000 , sizeY:2000},
                      art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
              }),
              new gameObject ({ //gameObject
                      grid:  {x:0, y:window.innerHeight-100 , sizeX:2000 , sizeY:2000},
                      art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
              }),

          ]);


  myViews.sccViews =[
            myViews.solarSystem,
            myViews.centerPanelMask,
            myViews.scroller,
            myViews.topView,
            myViews.detailsMenu,
            myViews.panelView,

                /*      new menu( { //left menu
                                grid:{x:0,y:window.innerHeight/2-200,sizeX:100,sizeY:400},
                                art:new art({bgColor:"rgb(0,0,0,0.3)",bgShape:"rectangle"}),
                        },
                        [
                                 new button ({ //gameObject
                                         grid:  {x:16 , y:16 , sizeX:66 , sizeY:66},
                                         art:new art({bgColor:camera.menuColor,bgShape:"science"}),
                                         click:{action:selectRegion,params:{view:myViews.scienceView,scroller:[true,false]},hoverObj:{texts:["Science"]}},
                                 }),
                                 new button ({ //gameObject
                                         grid:  {x:16 , y:116 , sizeX:66 , sizeY:66},
                                         art:new art({bgColor:camera.menuColor,bgShape:"money"}),
                                          click:{action:selectRegion,params:{region:-2},hoverObj:{texts:["Money"]}}
                                 }),
                                 new button ({ //gameObject
                                         grid:  {x:16 , y:216 , sizeX:66 , sizeY:66},
                                         art:new art({bgColor:camera.menuColor,bgShape:"people"}),
                                            click:{action:selectRegion,params:{region:-3},hoverObj:{texts:["People"]}}
                                 }),
                                 new button ({ //gameObject
                                         grid:  {x:16 , y:316 , sizeX:66 , sizeY:66},
                                         art:new art({bgColor:camera.menuColor,bgShape:"settings"}),
                                         click:{action:viewAdd,params:myViews.settings,hoverObj:{texts:["Settings"]}}
                                 }),




                     ]),*/
            myViews.menuViews

                                ];


//shouldn't this "select views" functionality be part of the Engine???
//whats worth migrating udpwards here?

  function selectRegion( params ){

      if ( params.view !== undefined ) {
            camera.follow = null;
            camera.mapX=0;camera.mapY=0;
            camera.views[0] = params.view;
            camera.views[2] = new scrollMenu(params.scroller[0],params.scroller[1]);
        draw.draw;
}
}



//initialized basic menus
camera.views =  [,];



function viewAdd ( view ){
     camera.views.push(view);

}

function viewInit( params ){

      camera.views = [];
      params.myViews.forEach(function(view){
          camera.views.push(view);
      });


}



function topInit(){

    camera.views = [];
//    console.log(myViews.solarSystem.tiles[3]);
//    console.log("waht");
//    selectPlanet({item:myViews.solarSystem.tiles[3]});
    camera.views.push(new menu( {
            grid:{x:window.innerWidth/2-400,y:window.innerHeight/2-200,sizeX:400,sizeY:200},
            art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
    },
          [
                new button ({ //gameObject
                        grid:  {x:10 , y:10 , sizeX:180 , sizeY:180},
                        art:new art({bgColor:"black",bgShape:"rectangle",fill:false},{texts:["Space","Colony","Corps"],textColor:"white"}),
                        click:{action:viewInit,params:{myViews:myViews.sccViews},hoverObj:{texts:["Solar System"]}}
                }),
                new button ({ //gameObject
                        grid:  {x:210 , y:10 , sizeX:180 , sizeY:180},
                        art:new art({bgColor:"black",bgShape:"rectangle",fill:false},{texts:["Board","Games",""],textColor:"white"}),
                        click:{action:viewInit,params:{myViews:bg.views},hoverObj:{texts:["Solar System"]}}
                })
              ]
              ));


}
