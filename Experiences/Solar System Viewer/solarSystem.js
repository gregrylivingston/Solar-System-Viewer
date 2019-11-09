
//generic object that describes renderable objects....
// name, n , type, description , locations
//see top of button for more.  planet should be part of it, probably I guess



//these are some sample decorations....






class orbitSystem extends map {
        constructor(params , planets){
                var params = {type:"predefined",
                        art:{bgColor:"black",bgShape:"rectangle"},
                        grid:{x:0,y:0,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                        size:params.size,
                        coords:[0,0,0],
                        displayOpt:params.displayOpt,
                        tiles:planets
                      };

              super(params);


              }

              getScreenCoordinates(n , originX , originY){ //returns the x,y screen getMapCoordinates

                            return [
                                originX - camera.zoom*camera.mapX*3 + camera.padding + (this.displayOpt.tileSpace*(n%this.columns) * (1 + (n*this.displayOpt.tileSpaceMulti ))),
                                originY - camera.zoom*camera.mapY*3 + camera.padding + 0*this.grid.sizeY/(this.rows+1) - this.tiles[n].grid.sizeY/2
                                      ]
                                        //obviously predefined here should use the first item to "line" up the other items
              }
              draw(x = this.grid.x , y = this.grid.x){


                if ( this.tiles[0].name == "Sun" ) {
                        ctx.beginPath();
                        ctx.fillStyle= this.art.bgColor;
                        ctx.strokeStyle=this.art.bgColor;
                        ctx.lineWidth=6;
                        ctx.fillRect(this.grid.x,this.grid.y,this.grid.sizeX,this.grid.sizeY);
                        ctx.closePath();
                }

                camera.zoom=Math.max(40,window.innerWidth/40)

                //should behave differently based on the type of map, just like initializing...
                                  for ( var i = 0 ; i < this.tiles.length ; i ++ ){
                                      if ( this.tiles[i]!== null && this.tiles[i]!== undefined){
                                        var originCoords = this.getScreenCoordinates(0 , x , y);
                                        var coords = this.getScreenCoordinates(i , x , y);

                                        if ( i != 0 ) var orbit = getOrbit(originCoords[0],originCoords[1],Math.abs(coords[0]-originCoords[0]),(60/64)*i,i*10);
                                        else var orbit = coords;



                                        this.tiles[i].grid.x = orbit[0];
                                        this.tiles[i].grid.y = orbit[1];
                                        //this is for planets only! clearly we need better engine code
                                              ctx.beginPath();
                                              ctx.strokeStyle="white";
                                              ctx.lineWidth=.5;
                                              ctx.arc(originCoords[0] + this.tiles[0].grid.sizeX/2, originCoords[1] + this.tiles[0].grid.sizeY/2, Math.abs(coords[0]-originCoords[0]) ,0, 2 * Math.PI);
                                              ctx.stroke();

                               if ( orbit[0] > this.grid.x - 1000 && orbit[0] < this.grid.x + this.grid.sizeX + 1000 && orbit[1] > this.grid.y - 1000 && orbit[1] < this.grid.y + this.grid.sizeY - camera.zoom +1000)
                               {
  //                                  console.log("draw planet " + this.tiles[i].name + " at " + coords)

                                        this.tiles[i].draw(orbit[0],orbit[1]);

                                  }
                                }}

              }


              solarCoordinates (n) {
                var coords =   [(this.displayOpt.tileSpace*(n%this.columns) * (1 + (n*this.displayOpt.tileSpaceMulti ))) +this.grid.x  ,
                  this.grid.y  + 0*this.grid.sizeY/(this.rows+1)
                ];
                return coords
              }



}



//need a storage map associated with the planet?
var colorCollection = {
        "Water":"rgb(0,100,200)",
        "Grass":"rgb(20,160,50)",
        "Sand":"rgb(180,160,100)",
        "AsteroidGrey":"rgb(80,80,80)",
        "MoonGrey":"grey",
        "VenusDust":"rgb(160,40,20)",
        "SunFire":"rgb(230,230,160)",
        "SunFlare":"rgb(245,200,100)"
};
/*
class planet extends button {
      constructor (  gameObjectConstructor , click , planetDetails  ){
      super(gameObjectConstructor , click);
      this.planetDetails = planetDetails;
    }
}/*
/*
var planets = [ new planet (
                  { //gameObject
                    grid:  {x:-100, y:-100 , sizeX:66 , sizeY:66},
                    art:new art({bgColor:colorCollection.SunFire,bgShape:"circle"})
                  },
                  { //clickObject
                      action:selectPlanet,params:{region:1},hoverObj:{texts:["Transfer Orbits"]}
                  },
                  {//planetDetails

                  }
          ),

          ]

*/









 //DATA ABOUT PLANETS


  var mercuryOrbits = new orbitSystem({size:[3,1],
                        displayOpt:{tileSpace:100,tileSpaceMulti:1 }},
    [
              /*  new planet ("M","E",50,"rgb(100,150,200)",[],"Planet",""),
                new planet ("Close Orbit","LO",1,"rgb(100,100,100)",[],"Orbit"),
                new planet ("Distant Orbit","GSO",1,"rgb(100,100,100)",[],"Orbit"),*/
          //      new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
  ]);

  var venusOrbits = new orbitSystem({size:[4,1],
                        displayOpt:{tileSpace:100,tileSpaceMulti:1 }},
    [
                new planet ("EarthHolder","E",50,"rgb(100,150,200)",[],"Planet",""),
                new planet ("Low Earth Orbit","LEO",1,"rgb(100,100,100)",[],"Orbit"),
                new planet ("Geosynchronous Orbit","GSO",1,"rgb(100,100,100)",[],"Orbit"),
          //      new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
  ]);

var earthOrbits = new orbitSystem({size:[12,1],
                      displayOpt:{tileSpace:30,tileSpaceMulti:0 }},
  [

              new planet ("EarthHolder","E",50,"rgb(100,150,200)",[],"Planet",""),
              null,
              new planet ("Low Earth Orbit","LEO",1,"rgb(100,100,100)",[],"Orbit"),
              null,null,null,null,null,
              new planet ("Medium Earth Orbit","MEO",1,"rgb(100,100,100)",[],"Orbit"),

              null,null,null,
              null,
              new planet ("Geosynchronous Orbit","GSO",1,"rgb(100,100,100)",[],"Orbit"),
              null,null,
              new planet ("The Moon","",10,"rgb(100,100,100)",[],"Moon","",),null,null,null,
              new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
]);


var marsOrbits = new orbitSystem({size:[6,1],
                      displayOpt:{tileSpace:100,tileSpaceMulti:1 }},
  [
              new planet ("EarthHolder","E",50,"rgb(100,150,200)",[],"Planet",""),
              new planet ("Low Earth Orbit","LO",1,"rgb(100,100,100)",[],"Orbit"),
              new planet ("Geosynchronous Orbi","SO",1,"rgb(100,100,100)",[],"Orbit"),
              new planet ("Demos","  Demos",6,"rgb(100,100,100)",[],"Moon","",),

              new planet ("Phobos","  Phobos",6,"rgb(100,100,100)",[],"Moon","",),
        //      new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
]);
var asteroidOrbits = new orbitSystem({size:[6,1],
                      displayOpt:{tileSpace:100,tileSpaceMulti:1 }},
  [
              new planet ("a","E",50,"rgb(100,150,200)",[],"Planet",""),
              new planet ("Vesta","",4,"rgb(100,100,100)",[],"Orbit"),
              new planet ("Eros","",3,"rgb(100,100,100)",[],"Orbit"),
              new planet ("Hygiea","",2,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Euphrosyne","",1,"rgb(100,100,100)",[],"Moon","",),
        //      new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
]);

var jupiterOrbits = new orbitSystem({size:[12,1],
                      displayOpt:{tileSpace:30,tileSpaceMulti:1 }},
  [
              new planet ("EarthHolder","E",50,"rgb(100,150,200)",[],"Planet",""),
              new planet ("Low Earth Orbit","",1,"rgb(100,100,100)",[],"Orbit"),
              new planet ("Geosynchronous ","",1,"rgb(100,100,100)",[],"Orbit"),
              new planet ("Amalthea","",3,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Thebe","",2,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Io","",8,"rgb(130,100,50)",[],"Moon","",),
              new planet ("Europa","",6,"rgb(80,120,30)",[],"Moon","",),
              new planet ("Ganymede","",12,"rgb(150,150,150)",[],"Moon","",),
              new planet ("Callisto","",10,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Himalia","",3,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Elara","",2,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Carme","",1,"rgb(100,100,100)",[],"Moon","",),

        //      new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
]);
var saturnOrbits = new orbitSystem({size:[14,1],
                      displayOpt:{tileSpace:12,tileSpaceMulti:1 }},
  [
              new planet ("EarthHolder","E",50,"rgb(100,150,200)",[],"Planet",""),
              new planet ("Dione","",13,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Tetyhs","",12,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Encaladus","",10,"rgb(130,100,50)",[],"Moon","",),

              new planet ("Rhea","",15,"rgb(80,120,30)",[],"Moon","",),
              new planet ("Mimas","",12,"rgb(150,150,150)",[],"Moon","",),
              new planet ("Helene","",10,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Hyperion","",3,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Janus","",2,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Prometheus","",1,"rgb(100,100,100)",[],"Moon","",),

              new planet ("Titan","",17,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Iapetus","",15,"rgb(100,100,100)",[],"Moon","",),
              new planet ("Phoebe","",8,"rgb(130,100,50)",[],"Moon","",),
              new planet ("Pandora","",6,"rgb(80,120,30)",[],"Moon","",),

        //      new planet ("Lagrance or Something","L4",1,"rgb(100,100,100)",[],"Orbit")
]);

var planetDescriptions = [//sun
                ["Size  109 Earths",
                "Mass  333K Earths",
                "Gravity  28 g",
                "Surface  6K C",
                "Core 10M C",
                "",
                "8 major satellites",
                "","","",
                "Its gravity holds the solar system together, keeping",
                "everything from the biggest planets to the smallest",
                "particles of debris in its orbit.  The nuclear furnace",
                "at it's core will continue to heat the solar system for",
                "billions of years - but will the sun's immense power",
                "bind humanity to it forever?"
              ],//mercury
              ["Size  .056 Earths",
              "Mass  .055 Earths",
              "Gravity  .38 g",
              "Surface  500 C",
              "Pressure trace",
              "",
              "No major satellites",
              "","","",
              "Mercury's scorched surface is litered with craters.",
              "Temperates swing from -200 C on the nighttime side",
              "of the planet to 500 C on the daytime side.  Vast,",
              "smooth plains are punctuated by steep ranges",
              "miles high.  Geologists believe a thick iron core",
              "lies at the center of the planet."
            ],
              [//venus
                "Size  0.95 Earths",
              "Mass  0.815 Earths",
              "Gravity  0.9 g",
              "Surface  462 C",
              "Pressure 91atm",
              "",
              "No major satellites",
              "",
              "Similar in structure and size to Earth",
              "Venus spins slowly in the opposite direction.",
              "Its thick atmosphere traps heat in a runaway",
              "greenhouse effect, making it the hottest planet",
              "in our solar system with surface temperatures",
              "hot enough to melt lead."
            ],
            [//earth
                "Radius  6K km",
                "Mass  6x10^24 kg",
                "Gravity  9.8 m/s^2",
                "Surface  15 C",
                "Pressure 1atm",
                "",
                "1 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],
            [//mars
                "Radius  .53 Earths",
                "Mass  .1 Earths",
                "Gravity  .38 g",
                "Surface  -63 C",
                "Pressure .01atm",
                "",
                "2 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],
            [//Asteroids
                "Radius",
                "Mass  1/2 Pluto",
                "Gravity  1/2 Pluto but spread out",
                "Surface  -63 C",
                "Pressure .01atm",
                "",
                "2 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],
            [//Jupiter
                "Radius",
                "Mass  1/2 Pluto",
                "Gravity  1/2 Pluto but spread out",
                "Surface  -63 C",
                "Pressure .01atm",
                "",
                "4 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],
            [//Saturn
                "Radius",
                "Mass  1/2 Pluto",
                "Gravity  1/2 Pluto but spread out",
                "Surface  -63 C",
                "Pressure .01atm",
                "",
                "13 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],
            [//Uranus
                "Radius",
                "Mass  1/2 Pluto",
                "Gravity  1/2 Pluto but spread out",
                "Surface  -63 C",
                "Pressure .01atm",
                "",
                "2 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],
            [//Neptune
                "Radius",
                "Mass  1/2 Pluto",
                "Gravity  1/2 Pluto but spread out",
                "Surface  -63 C",
                "Pressure .01atm",
                "",
                "2 major satellites",
                "","",
                "Similar in structure and size to Earth",
                "Venus spins slowly in the opposite direction.",
                "Its thick atmosphere traps heat in a runaway",
                "greenhouse effect, making it the hottest planet",
                "in our solar system with surface temperatures",
                "hot enough to melt lead."
            ],

      //      "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.  From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.",
      //        "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",

];
