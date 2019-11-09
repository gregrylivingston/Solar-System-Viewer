//this one definitely belonds in the Engine, with a brief explanation at the top of this.

//details includes
//    name = string (length <= ?)
//    n = string (length <= 3)
//    size = [intX,intY]
//    description = [strings length <= 40 ]


//lets send some of these up to named object! includes...
    //    name , n , size , description

    //bgColor goes to parent (created via art)
    //"planet" gets eliminated...




//some subclasses....
//gets a map of surface tiles!!!! (each of which has the capacity for a submap....)
class planet extends namedObject{
        constructor(name , n , size , color , orbitArray = [] ,type = "Planet" , description , map = null){
            var myPlanetSize = size[0];
            if ( description === undefined ) description = ["","",""]
            var details = {   name:name,
                          n:n,
                          size:[size,size],
                          description:description,
                          art:new art ({bgColor:color,
                                        bgShape:"mediumCircle",
                                  //      decColor:color,
                                }),

                          grid:{x:0,y:0,sizeX:100,sizeY:100}
                        };
            if ( details.name == "Earth") details.art.bgShape = "earth";
            super( details );
            this.size = size;
            this.color = color;
            this.orbitSystem = orbitArray;
            this.descriptionUnshift = unshiftText => this.description =  [...unshiftText, ...this.description];
//add some description text to the items in orbit...
            if (this.orbitSystem.tiles !== undefined){ this.orbitSystem.tiles.forEach( function ( system ) {
                if ( system !== null) system.description = system.descriptionUnshift(["Satellite","","","","",""]);

          })}
              //this.orbitSystem.tiles[i].descriptionUnshift(["Orbits: " + this.name]))
            this.type = type;   //this should go to a generic object
            this.map = map;
            this.clickStorage = {action:selectPlanet,params:{item:this},hoverObj:{texts:[details.name]}};
        }


        draw(x=this.grid.x,y=this.grid.y){


          if ( x > -500 && x < window.innerWidth + 200 && y > -500 && y < window.innerHeight +500 )
          {
//planet
              //super.draw();
                ctx.beginPath();
                ctx.fillStyle= this.color;
                ctx.arc( x + this.grid.sizeX/2, y + this.grid.sizeY/2, this.size , 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();

/*
                if ( this.name != "Sun"){//shadow
                        ctx.beginPath();
                        ctx.fillStyle= "rgb(0,0,0,.5)";
                        ctx.rect( x + this.grid.sizeX/2, y + this.grid.sizeY/2 - this.size, this.grid.sizeX/2 , this.grid.sizeY);
                        ctx.fill();
                        ctx.closePath();
                }
*/
/// ok but lets actually just draw these subobjects, right!!! - we can feed them locations just like this

                if ( this.orbitSystem.tiles !== undefined && this.orbitSystem.tiles != null ){

                                    for ( var i = 0 ; i < this.orbitSystem.tiles.length ; i ++ ){

                                      if ( this.orbitSystem.tiles[i] != null && this.orbitSystem.tiles[i] != undefined){
                                          var originCoords = this.getScreenCoordinates(0);
                                          var coords = [this.grid.x + (i * this.orbitSystem.displayOpt.tileSpace),0];

                                           var orbit = getOrbit(originCoords[0] + this.grid.sizeX/2,originCoords[1]+this.grid.sizeY/2,Math.abs(coords[0]-originCoords[0]),(60/128)*(i*i),i*22);


                                          this.orbitSystem.tiles[i].grid.x = orbit[0];
                                          this.orbitSystem.tiles[i].grid.y = orbit[1];
/*// draws the circular orbits
                                          ctx.beginPath();
                                          ctx.strokeStyle="white";
                                          ctx.lineWidth=.5;
                                          ctx.arc(originCoords[0] + this.grid.sizeX/2,originCoords[1]+this.grid.sizeY/2,Math.abs(coords[0]-originCoords[0]) ,0, 2 * Math.PI);
                                          ctx.stroke();

      */
        //                                  console.log(this.orbitSystem.tiles[i].description);
                                          this.orbitSystem.tiles[i].draw(orbit[0] - this.grid.sizeX/2,orbit[1] - this.grid.sizeY/2);
/* show names of orbits/objects
                                          ctx.beginPath();
                                          ctx.fillStyle = "white";
                                          ctx.font = "12" + "px Arial";
                                          //+ this.grid.sizeY/2
                                          // + this.grid.sizeX/2
                                          ctx.fillText(  this.orbitSystem.tiles[i].n , orbit[0] , orbit[1] );
                                          ctx.closePath();*/
                                        }
                                    }

                      //             }



              //  console.log(gridSize);

            }
            this.click = ( new mouseClick ( x , y , this.grid.sizeX , this.grid.sizeY
                                                    ,this.clickStorage.action,this.clickStorage.params,this.clickStorage.hoverObj , this ));
            clickFinder.unshift(this.click);
          }}
        getItem(){
          super.getItem();
        }


}

function getOrbit ( x0 , y0 , r , spd = 30 , offset = 0 ) {

    var date = new Date();
    var time = date.getMinutes()%spd + date.getSeconds()/60 + date.getMilliseconds()/(1000*60);
   var multi = 60/spd;
//0-30 = *33.3 /1000    %30
//0-20 = *50 / 1000     %20
//0-60 = *16.5 / 1000
    var spd = (time*16.65*multi)  / 1000;
//    console.log(spd);

    var x = x0 + r * Math.cos(2 * Math.PI * spd +offset);
    var y = y0 + r * Math.sin(2 * Math.PI * spd + offset) ;

    return [x,y]


}


function updateMenuArt( color ){


  camera.views.forEach(function ( view ) {

//note - this progbably isn't really an engine feature....
//100,150,200
          if ( camera.menuColor == view.art.bgColor )
          {
                  view.art.bgColor = color;
          }

          view.objects.forEach(function(object){
                if ( object.art.bgColor == camera.menuColor ) {

                     object.art.bgColor = color;
                }
          }
        )
      });
        camera.menuColor = color;

}

function selectPlanet(params){
      console.log(params);
      console.log(params.item.constructor.name === "planet");


                  myViews.topView.objects[2].art.texts = [params.item.name,""];
                  updateMenuArt(params.item.art.bgColor);
                  selectedPlanet = params.item;
                  myViews.topView.objects[2].texts = [params.item.name,""];
                  myViews.menuViews.objects[3].clickStorage.params.view = params.item.map;


            camera.follow = params.item;

      //      selectedPlanet = params.item;

            camera.selectedItem = params.item;
            myViews.detailsMenu.objects[1].art = camera.selectedItem.art;
            myViews.detailsMenu.objects[2].art.texts = [camera.selectedItem.name,""];
            //    myViews.detailsMenu.objects[2].art.texts = ["hello Wrold"];
                myViews.detailsMenu.objects[3].art.texts = [...camera.selectedItem.description];


            draw.draw();

}


function currentOrbitalSystem(){
                camera.mapX = 0;
                camera.mapY = 0;
                camera.views[0] = new menu( { //Center Panel
                                  grid:{x:100,y:100,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                                  art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                                },
                                [new orbitSystem([
                                                        ...myViews.selectedPlanet.orbitArray
                                                    ]),
                                    ]
      );




}

/* ---- create a new menu with the subobjects from a planet!
new menu( { //Center Panel
                            grid:{x:100,y:100,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                            art:new art({bgColor:camera.menuColor,bgShape:"rectangle"}),
                          },
                          [new map({type:"predefined",
                                              art:{bgColor:"black",bgShape:"rectangle"},
                                              grid:{x:6,y:6,sizeX:window.innerWidth*.75-126,sizeY:window.innerHeight-212},
                                              size:[8,1],
                                              coords:[0,0,0],
                                              displayOpt:{tileSpace:100,tileSpaceMulti:1 },
                                              tiles:[

                                                    new planet ("Sun","S",100,colorCollection.SunFire,[],"Star",planetDescriptions[0]),
                                                    new planet ("Mercury","m",6,colorCollection.VenusDust,mercuryOrbits),
                                                    new planet ("Venus","v",14,colorCollection.VenusDust,venusOrbits),
                                                    new planet ("Earth","E",20,"rgb(100,150,200)",earthOrbits , "Planet", "",
                                                          new map (
                                                                {
                                                                  art:{bgColor:camera.menuColor,bgShape:"rectangle"},
                                                                  grid:{x:100,y:100,sizeX:window.innerWidth-400,sizeY:window.innerHeight-500},
                                                                  type:"grid",
                                                                  size:[50,50],
                                                                  coords:[0,0,0],
                                                                  tileset:{tiles:[0,1,2,3,4,5,6],odds:[2000,5,0,20,20,20,20]},
                                                                  displayOpt:{tileSpace:100,tileSpaceMulti:1 }

                                                                }
                                                              )),
                                                    new planet ("Asteroid Belt","a",4,colorCollection.AsteroidGrey,asteroidOrbits,"Orbit" ,"", ),
                                                    new planet ("Mars","M",17,"rgb(154,20,38)",marsOrbits),
                                                    new planet ("Jupiter","J",35,colorCollection.Sand,jupiterOrbits),
                                                    new planet ("Saturn","s",32,colorCollection.Sand,saturnOrbits)
                                              ]
                              })]
);*/
