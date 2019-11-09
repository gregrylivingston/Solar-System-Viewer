
//are x0 and y0 offset or absolute values??? I should have written this down

function mouseMove(e){
  var element = canvasE;
  var myoffsetX = 0,  myoffsetY = 0


    x = e.pageX - myoffsetX;
    y = e.pageY - myoffsetY;
    camera.panX = e.pageX;
    camera.panY = e.pageY;
  //  draw.draw();

    camera.mouseX = x;
    camera.mouseY = y;

    hoverFinder(x,y);


}

function onClick(e) {
      var element = canvasE;
      var offsetX = 0, offsetY = 0

          if (element.offsetParent) {
        do {
          offsetX += element.offsetLeft;
          offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
      }

      x = e.pageX - offsetX;
      y = e.pageY - offsetY;

     clickManager(x,y);

  }



var clickFinder = [];
class mouseClick {
      constructor ( x , y , x0 , y0 , action , object , hover , parent){
        this.x = x;
        this.y = y;
        this.x0 = x0;
        this.y0 = y0;
        this.action = action;
        this.params = object;
        this.hoverObj = hover;
        this.clickParent = parent;
      }

}
    var clickAction;
function clickManager( x , y ){

    clickFinder.some ( function(click){
          if ( x > click.x && x < click.x + click.x0 && y > click.y && y < click.y + click.y0 ) {
              if ( click.action != null ) {
                  click.action(click.params);
              }
              return true
          }
          if ( camera.loop === false ) draw.draw();

    });


}


function hoverFinder( x,y ) {

//this probably fires repeatedly and shouldn't...
      clickFinder.some ( function(click)
      {
            if ( x > click.x && x < click.x + click.x0 && y > click.y && y < click.y + click.y0 ) {
                for ( var i = 0 ; i < click.hoverObj.texts.length ; i ++ ) {
                  ctx.beginPath();

                  ctx.fillStyle="white";  ctx.font = "18px Arial";
                  ctx.fillText( click.hoverObj.texts[i] , x + 5 , y + 35  );
                  ctx.closePath();
                }
//***well this reference to "planet" is ugly, let's plan to get rid of it...
//interesting to think about what the real rules for "object selection" should be - maybe it really is circumstantial or a set of choices.
//                if ( click.clickParent.name !== undefined && click.clickParent.constructor.name == "planet") select( { item:click.clickParent } );
                if ( click.clickParent.description !== undefined) select( { item:click.clickParent } );

                return true
            }
            if ( camera.loop === false ) draw.draw();

      });

}
