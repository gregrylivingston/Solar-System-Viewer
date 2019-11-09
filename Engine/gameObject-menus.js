//Menu takes an array of objects and displays them on a canvas according to the menu's coordinates
//params::gameObjectConstructor , objectArray


//maybe it should also draw a background based on it's own gameObject inheritance(?)
//for some reason this was drawing after the buttons so I turned it off and used a button background.

class menu extends gameObject{
      constructor ( maker , objects ){
          objects.forEach(function(object){
        //      console.log("object.grid.x:" + object.grid.x);
        //      console.log("maker.grid.x:" + maker.grid.x);

              object.grid.x+=maker.grid.x;
              object.grid.y+=maker.grid.y;
    //          console.log("final object.grid.x:" + object.grid.x);
              if ( object.click!==undefined){ object.click.x+=maker.grid.x;  object.click.y+=maker.grid.y;}
          });
          super( maker );
          this.objects = objects;

      }

      draw (){

        ctx.beginPath();
        ctx.fillStyle= this.art.bgColor;
        ctx.strokeStyle=this.art.bgColor;
        ctx.lineWidth=6;
        ctx.fillRect(this.grid.x,this.grid.y,this.grid.sizeX,this.grid.sizeY);
        ctx.closePath();
  //      super.draw();
          this.objects.forEach( function ( object )
          {
            object.draw();
    });
}

    updateMenuPosition(x,y){
        var xOffset = x-this.grid.x;
        var yOffset = y-this.grid.y;
      //new position can be used to calculate an offset from the old position and move the subobjects, right?
        this.grid.x=x;
        this.grid.y=y;
        this.objects.forEach(function(object){
            object.grid.x+=xOffset;
            object.grid.y+=yOffset;
            if ( object.click!==undefined){ object.click.x+=xOffset;  object.click.y+=yOffset;}
    });
}
}


// --- maybe default anchor types - each corner and the middle that define menu behavior (??)
