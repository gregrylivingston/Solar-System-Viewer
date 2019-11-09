
//should extend object and take a background.  Maybe our planets map and other things act similarily....
//like aren't they all just different types of maps(?)

//Planet Map -> array of PLANETS
//Tile Map -> 2d array of tiles
//Line Map -> for like science or other kinds visuals
//List Map -> for menus or inventories or something
//Sequence Map -> shows menu objects in a particular order or something


//map options...
//    type:["grid","lists-planets-left  "]
//    size
//    display: bottom, right, left, right, center --- lets leave this out
//    style: planets, grid, tiles
//    tileset: {tiles:[],odds:[]}

//type is...
//    grid  opt:
//    lists



// how to set relative sizes for subobjects?


//new map (  "Region", [100,100] ,[0,0,0] , {tiles:[0,1,2,3,4,5,6],odds:[2000,0,0,10,10,10,10]})
//new map ( mapDetails{ type:"grid" , size:[x,y], coords:[x,y,z],tileset:{tiles:[],odds:[]})

class map extends gameObject {

//surface maps should self destruct UNLESS they are updated in some way!
      constructor ( map ){
//    constructor (  type , size , coords , tileset = {tiles:[0,1,2,3,4,5,6],odds:[2000,5,0,20,20,20,20]}){ //size [x,y] coords[x,y,z]
      var gameObjectConstructor = {  art:map.art,grid:map.grid
      };
      super( gameObjectConstructor);
      this.initialized = false;
      this.tileButtons = [];
      this.type = map.type; //"Region" or "Area" or " tile" or "item" (couldn't it be all those things...)
      this.columns = map.size[0]; //x,y
      this.rows = map.size[1];
      this.defaultTile = 0;
      this.map = map;

   switch ( map.type ) {
      case "predefined":
          this.tiles = map.tiles;
          this.displayOpt = map.displayOpt;
          break;
      default://tiles for procedurally generated maps will only be made when those are called.  In the long run they should only be saved when edited.
          this.tiles = null;
          this.displayOpt = {};                                                                                                        // name,color,decoration
                                                                                                                 //cost for foundations
                      //probably needs some extra data about what should be in these tiles....
                                                            //supposedly this is just terrain tiles....
                                                            //store maps for...
                                                            //utilities/lifesupport - power, water, air, food
                                                            //buildings and other objects
                                                            //logistics and logic (?)

                  };
                  //get tilemap[i] = x + columns*y
                  //add top and bottom roads for "Area"s

                  /* on Earth we should probably make roads or something but this isn't quite the right place for this math right now
       if ( type == "Area"){
         console.log("make roads");
                      for ( var i = 0 ; i < this.rows ; i ++ ) {this.tiles.terrain[this.columns/2+this.columns*i]=2; console.log("road made+ "+ i)}//add a road to each row
                      for ( var i = 0 ; i < this.columns ; i ++ ) this.tiles.terrain[i+this.columns*this.rows/2]=2; //add a road to each column
                      this.tiles.terrain[this.columns/2+this.columns*this.rows/2]=2; //add a road to the middle tile.
                    }
                    */
    }
    getTile(x , y){    //returns the tile (maybe should just convert to tileId) //getTile probably needs some updates....
        if ( this.type == "grid" ) return [x+(this.columns*y)]; //currently unused
        else return false
    }
    getMapCoordinates(n) {   //returns the x,y coordinates
        if (this.type == "grid" )  return [ n%this.columns , Math.floor((n/this.columns))]; //currently unused
        else return false
    }
    getScreenCoordinates(n){ //returns the x,y screen getMapCoordinates
        if (this.type == "grid") {
            return [  camera.zoom * (n%this.columns) + this.grid.x + camera.padding - camera.mapX*camera.zoom,
                      camera.zoom * Math.floor((n/this.columns)) - camera.mapY*camera.zoom + camera.padding + this.grid.y]}
        if (this.type == "predefined")  {
            //right now this is the planets!  could also be other kinds of menus, originaly preserved before adding
                        if ( this.rows == 1 ) {
                                return [
                                    (this.displayOpt.tileSpace*(n%this.columns) * (1 + (n*this.displayOpt.tileSpaceMulti ))) + this.grid.x - camera.zoom*camera.mapX*3 + camera.padding,
                                    this.grid.y - camera.zoom*camera.mapY*3 + camera.padding + this.grid.sizeY/(this.rows+1) - this.tiles[n].grid.sizeY/2
                                          ]
                        } else {
                          return [
                              //these are basically correct for 1 dimension....
                                //  a modifier           the column place
                              (this.displayOpt.tileSpace*(n%this.columns) * (1 + (n*this.displayOpt.tileSpaceMulti ))) + this.grid.x - camera.zoom*camera.mapX*3 + camera.padding,
                              //  offset from screen      //map movement..  padding              //vertical spacing
                              this.grid.y - camera.zoom*camera.mapY*3 + camera.padding + this.grid.sizeY*((Math.floor(n/this.columns))/this.rows)

                                    ]
                        }
          }
                              //obviously predefined here should use the first item to "line" up the other items
    }

    // x,y world locations and z multiplyer are for random seed generation.  Only save tilesets that have changes from the original
    //this method should be a little more general... really just makes an Earth map right now.  Should be able to make both other planets and perhaps grips for power etc.  (or maybe those are separate methods...)
    makeTileGrid ( size , coords , tiles, terrainOdds ){
        console.log("makeGrid");
        var columns = size[0];
        var rows = size[1];
        var myTileMap = [];
        Math.seedrandom(coords[0]+coords[1]+coords[2]);

    for ( var rowit = 0 ; rowit < rows ; rowit++ ) {
        for ( var colit = 0 ; colit < columns ; colit ++ ){
          var odds = [];
              odds=[...terrainOdds];

            //for neighboring tiles, increase the likelhood of becoming that tiles
            for ( var i = 1 ; i < tiles.length ; i ++ ){
                if (  myTileMap[myTileMap.length-1] == tiles[i])  odds[i]+=3000;
                if ( myTileMap[myTileMap.length-columns] ==tiles[i] ) odds[i]+=3000;
            }
            myTileMap[myTileMap.length-1]
            myTileMap.push(numGen(odds , tiles));
          }
        }


        return myTileMap
    }

    draw(){


        if ( this.tiles === null ) {
             this.tiles = this.makeTileGrid ( this.map.size , this.map.coords , this.map.tileset.tiles, this.map.tileset.odds);  //lets try passing this object instead.... //# that stores tile data including....
        }

                ctx.beginPath();
                ctx.fillStyle= this.art.bgColor;
                ctx.strokeStyle=this.art.bgColor;
                ctx.lineWidth=6;
                ctx.fillRect(this.grid.x,this.grid.y,this.grid.sizeX,this.grid.sizeY);
                ctx.closePath();
                //should behave differently based on the type of map, just like initializing...
                camera.zoom=Math.max(40,window.innerWidth/40)

                if ( this.type != "predefined"){
                            for ( var i = 0 ; i < this.tiles.length ; i ++ ){

                                var coords = this.getScreenCoordinates(i);

                                if ( coords[0] > this.grid.x - camera.zoom && coords[0] < this.grid.x + this.grid.sizeX - camera.zoom&& coords[1] > this.grid.y - camera.zoom && coords[1] < this.grid.y + this.grid.sizeY - camera.zoom )

                      //maybe buttons should not be recreated and redrawn every frame?  They should be added to and removed from the camera manager!
                          //      this.tileButtons.push(
                                    new namedObject ({
                                        grid:{x:coords[0],y:coords[1],sizeX:camera.zoom,sizeY:camera.zoom},
                                        art:new art({bgColor:tiles[this.tiles[i]].color,bgShape:"rectangle",dec:tiles[this.tiles[i]].decoration}),
                                        name:tiles[this.tiles[i]].type,
                                        description:[Math.floor(90-i/this.rows) + " N",i%this.columns + "E","","","","",""]
                                        },
                                    /*    {
                                          action:clickTile,
                                          params:{i:i},
                                          hoverObj:{texts:[tiles[this.tiles[i]].type]}
                                        }*/
                                ).draw();
                          }
                } else {



                          for ( var i = 0 ; i < this.tiles.length ; i ++ ){
                              var coords = this.getScreenCoordinates(i);
                              if ( coords[0] > this.grid.x && coords[0] < this.grid.x + this.grid.sizeX && coords[1] > this.grid.y && coords[1] < this.grid.y + this.grid.sizeY - camera.zoom )
//draw everything!
                          //    {
                                this.tiles[i].grid.x = coords[0];
                                this.tiles[i].grid.y = coords[1];
                                //this is for planets only! clearly we need better engine code


                                this.tiles[i].draw(coords[0],coords[1]);
                            //  }
                          }

                }
          }

          getTile(n){

                return this.tile[n];
          }

}


//takes 2 arrays, the first with weighted probably, the second with the value returned at that probability
function numGen ( odds, tiles ){
    var sumodds = 0;
    odds.forEach(function(odd){sumodds+=odd;})
    var rando = Math.random() * sumodds;
    var final = 0;
    var currentOdds = 0;
    for ( var i = 0 ; i < odds.length ; i ++ ){
      currentOdds+=odds[i];
      if ( rando < currentOdds){
        final = tiles[i];
        return final
      }
    }
  return final

}
