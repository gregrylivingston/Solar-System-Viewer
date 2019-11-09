
//params.tileset = { tiles:[1,2,3] , odds : [100,5,5] }
//params.displayOpt = {tilespace,tileSpaceMulti}



class surfaceMap extends menu {

          constructor( params ){

               var maker  = {
                          grid:{  x:94,y:94,sizeX:window.innerWidth*.75,sizeY:window.innerHeight-200},
                          art:new art({bgColor:"rgb(0,0,0,0.2)",bgShape:"rectangle"},
                                      {})
                        }
              var objects =

                          [
                //            new gameObject({grid:{x:0,y:0,sizeX:200,sizeY:50},
                //                            art:new art({bgColor:"rgb(100,100,100,.4)",bgShape:"rectangle"})}),
                            new surfaceTiles (
                                         {
                                           tileset:params.tileset, seed:params.tileset.seed
                                         }
                                       )
                          ];
              super (maker , objects);

          }







}

class surfaceTiles extends map {

      constructor( params ){
        var maker = {
                        art:{bgColor:"grey",bgShape:"rectangle"},
                        grid:{x:0,y:0,sizeX:window.innerWidth*.75,sizeY:window.innerHeight-100},
                        type:"grid",
                        size:[100,100],
                        coords:params.seed,
                        tileset:params.tileset
                      };
        super( maker );

      }


      draw(){
        super.draw();
      }



}
