
var selectedPlanet = {};
class gameModule {
      constructor(){}

}

class drawModule extends gameModule{
    constructor(){
          super();

          this.camera = {
                      mapX:0, mapY:0, //top left corner of tile map is 0,0
                      menuColor:"rgb(100,150,200)",
                      padding:6,
                      view:4,
                      showScroll:true,
                      follow:null,
                      scrollY:0,
                      scrollX:0,
                      loop:true,

//these probably belong in the game module or where?  They're like in between this, game, and controls
                      selectedLevel:{name:"Wait!"}, //renamed to "level" ??
                      selectedItem:{name:"test"},

          //            activeViews:[,,,,,,,,],
                      setMapXY: function ( x , y ) {
                            this.mapX+= ( x - (window.innerWidth*.75/2))/2000;
                            this.mapY+= ( y - (window.innerHeight/2))/2000;
                      },

                      refreshViews: function(){

                            var w = window.innerWidth;
                            var h = window.innerHeight;
                            this.w = w;
                            this.h = h;

                            ctx.width = w-50;
                            ctx.height = w-50;

                            camera.zoom=Math.max(40,window.innerWidth/20);

                          //      camera.menuColor = camera.selectedItem.bgColor;
          //                console.log(this.camera.views[0]);
      //                    this.camera.views[0].updateMenuPosition(100,100);
                          //position target value should be held by Menu
                                      //what does this actually need to include




                          //why not make an anchor for each location 0---- fills screen
                          /*    1 is top left, 2 is top center, 3 is top right.  Use their sizes to figure out their configuration?


                          */
/*                            this.camera.views.menus.updateMenuPosition(Math.max(w/2-250,200),h-88);
                            this.camera.views.leftMenu.updateMenuPosition(0,Math.min(h/2-200,h-550));
                            this.camera.views.scroll.updateMenuPosition(0,h-200);
                            this.camera.views.top.updateMenuPosition(w/2,0);
                            this.camera.views.rightMenu.updateMenuPosition(w*.75,100);
*/
                            draw.draw();

                      },



                    };



    }


    draw(){
          if ( camera.follow !== null && camera.follow !== undefined ) {
                      camera.setMapXY(camera.follow.grid.x,camera.follow.grid.y);
          }
          camera.mapX+=camera.scrollX/5;
          camera.mapY+=camera.scrollY/5;
          this.clear();
          clickFinder = [];
          this.camera.views.forEach(function ( gameObject ) { gameObject.draw() } );
    }
    clear() {
          ctx.beginPath();
          ctx.fillStyle="black";
          ctx.fillRect(0,0,width,height);
          ctx.fillStyle="#888888";
          ctx.strokeRect(0,0,width,height);
          ctx.closePath();
    }
    unloadScrollBars() {
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only
    }



}



class gameObjectsModule extends gameModule{
    constructor(){ super();}

}

class controlModule extends gameModule{
      constructor(){ super();}

}



var game = {
          control: new controlModule(),
          draw: new drawModule(),
          gameObjects: new gameObjectsModule(),
}

var draw = game.draw;
var camera = draw.camera;
var gameObjects = game.gameObjects;
var control = game.control;
window.onresize = camera.refreshViews;
var detailsMenu;

/*
      Some "built in" views to include....
            scroll menu(bool,bool)
             , zoom menu




*/

class scrollMenu extends menu {
        constructor( x = true , y = true ){
              var maker = {};
                  maker.art = new art({bgColor:("rgb(0,0,0,0.3)"),bgShape:"rectangle"});
                  maker.grid = {x:0,y:window.innerHeight-200,sizeX:200,sizeY:200};
              var objects = [];
                  objects.push(  new button
                              ({grid:{x:66 , y: 66 ,sizeX: 66 , sizeY:66},
                              art:new art({bgColor:camera.menuColor,bgShape:"circle"}),
                              click:{action:null,params:{},hoverObj:{texts:["Toggle Scroll/Zoom (coming soon)"]}},
                  }));


              if ( x == true ){
                    objects.push(new button ({
                                  grid:{x:133, y:66  ,sizeX: 66 , sizeY:66},
                                  art:new art({bgColor:camera.menuColor,bgShape:"rightarrow"}),
                                  click:{action:scroll,  params:{scroll:"right"},hoverObj:{texts:["Scroll Right  [ D ]"]}
                    }}));
                    objects.push( new button ({
                                grid:{x:0 , y: 66 ,sizeX: 66 , sizeY:66},
                                art:new art({bgColor:camera.menuColor,bgShape:"leftarrow"}),
                                click:{action:scroll,params:{scroll:"left"},hoverObj:{texts:["Scroll Left   [ A ]"]}
                    }}));
              }
              if ( y == true ) {
                    objects.push(  new button ({
                                grid:{x:66, y:0  ,sizeX: 66 , sizeY:66},
                                art:new art({bgColor:camera.menuColor,bgShape:"uparrow"}),
                                click:{  action:scroll,  params:{scroll:"up"},hoverObj:{texts:["Scroll Up  [ W ]"]}
                    }}) );
                    objects.push (   new button ({
                                grid:{x:66, y:133  ,sizeX: 66 , sizeY:66},
                                art:new art({bgColor:camera.menuColor,bgShape:"downarrow"}),
                                click:{  action:scroll,  params:{scroll:"down"},hoverObj:{texts:["Scroll Down  [ S ]"]}}
                    }));

              }

              super ( maker , objects )
}


}
//scrolling

    function scroll(params){

    switch (params.scroll) { //maybe fix the camera x y thing to be actually ints of the map like it should be....
        case "up":
          if ( camera.mapY > 0 ) camera.mapY-=1;
          break
        case "down":
          if ( camera.mapY < 100 ) camera.mapY+=1;
          break
        case "left":
          if ( camera.mapX > 0 ) camera.mapX-=1;
          break
        case "right":
          if ( camera.mapX < 100 )camera.mapX+=1;
          break
        case "options":
    }
}

//this should also become a special class of menu!!

var detailsViewMenu =           new menu(
            { //RightPanelMenu
                      grid:{x:window.innerWidth*.75+6,y:106,sizeX:window.innerWidth*.25-32,sizeY:window.innerHeight/2-100},
                      art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                    },
                    [
                            new gameObject ({ //gameObject
                                    grid:  {x:(window.innerWidth*.25-32)*.5 , y:0 , sizeX:(window.innerWidth*.25-32)*.5 , sizeY:Math.min(window.innerHeight/5,(window.innerWidth*.25-32)*.5)},
                                    art:new art({bgColor:"black",bgShape:"rectangle"},)
                            }),
                            new gameObject ({ //gameObject
                                    grid:  {x:(window.innerWidth*.25-32)*.5 , y:0 , sizeX:(window.innerWidth*.25-32)*.5 , sizeY:Math.min(window.innerHeight/5,(window.innerWidth*.25-32)*.5)},
                                    art:new art({bgColor:"white",bgShape:"circle"})
                              }),
                            new gameObject ({ //gameObject
                                    grid:  {x:0 , y:0 , sizeX:300 , sizeY:100},
                                    art:new art({bgColor:"rgb(0,0,0,.0)",bgShape:"rectangle"},{texts:["",""],textColor:"black"})
                              }),
                          new gameObject ({ //gameObject
                                  grid:  {x:0 , y:48 , sizeX:window.innerWidth*.25-32 , sizeY:window.innerHeight/2-110},
                                  art:new art({bgColor:"rgb(0,0,0,.0)",bgShape:"rectangle"},{texts:["",""],textColor:"black"})
                            }),
              ]);

/*



Like a game-state manager that includes....

control - clickHandler , keyHandler , hoverHandler
draw - camera location , canvas resize, views (menus) , levels (groups of views?)
game - art, button, menus (rename views - how these are propegates to draw), maps
      add like logic and stuff later!

*/


//well obvi this needs to be better!
function loadImage (url, ctx) {
  var img = new Image();
  img.src = url
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  }
}
//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

//loadImage("Experiences/Solar System Viewer/galaxy.jpg" , ctx);
