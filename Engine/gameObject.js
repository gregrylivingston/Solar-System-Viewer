/*  OBJECT FEATURES

grid - x,y,sizeX,sizeY
art - bgColor , bgShape, decColor, dec
clickable -





*/


//art = { bgColor:"white" , bgShape:"circle" , decColor ,  dec }
//hover / selected art!!!
class art {
    constructor ( art , text = {texts:undefined}){

       //default values
        this.bgColor = "orange";
        this.bgShape = null;
        this.fill = null;
        this.decColor = undefined; //color of decorations
        this.dec = undefined; //decorations
        this.texts=undefined;
        this.textColor="white";
        this.textOffset=[10,30];
        if ( art.bgColor !== undefined && art.bgColor !== null ) this.bgColor = art.bgColor;
        if ( art.fill !== undefined ) {this.fill = art.fill;}
        if ( art.bgShape !== undefined ) {this.bgShape = art.bgShape;}
        if ( art.decColor !== undefined ) this.decColor = art.dec; //color of decorations
        if ( art.dec !== undefined ) {this.dec = art.dec;} //decorations
        if ( text.texts !== undefined ) this.texts=text.texts;
        if ( text.textColor !== undefined ) this.textColor=text.textColor;
        if ( text.textOffset !== undefined ) this.textOffset=text.textOffset;
    }
//draw art, given location and screen size....
}




class gameObject {
    constructor ( gameObjectConstructor ){
        this.grid = gameObjectConstructor.grid;
        this.art = gameObjectConstructor.art;
        this.visible = true;
      }

      getScreenCoordinates(){
          return [ this.grid.x , this.grid.y ]
      }
  /*        saveScreenCoordaintes( x , y ){
              this.x = x;
              this.y = y;
          }
*/
      draw(x=this.grid.x,y=this.grid.y){

    //    if  ( this.visible == true ) {
              { //backgroundShapes
              ctx.beginPath();
              ctx.fillStyle= this.art.bgColor;
              ctx.strokeStyle=this.art.bgColor;
              ctx.lineWidth=6;

                      switch ( this.art.bgShape ){
                        case "circle":
                //        if ( x != this.grid.x) console.log("1 Circle:"+ y );

                            ctx.arc( x+this.grid.sizeX/2, y+this.grid.sizeY/2, this.grid.sizeX/2, 0, 2 * Math.PI);
                            if ( this.art.fill == false ) {ctx.stroke();} else { ctx.fill();}
                            break
                        case "mediumCircle":
                //        if ( x != this.grid.x) console.log("1 Circle:"+ y );

                            ctx.arc( x+this.grid.sizeX/2, y+this.grid.sizeY/2, this.grid.sizeX/4, 0, 2 * Math.PI);
                            if ( this.art.fill == false ) {ctx.stroke();} else { ctx.fill();}
                        break
                        case "orbit":
                            ctx.arc( x+this.grid.sizeX/2, y+this.grid.sizeY/2, this.grid.sizeX/2 - 20, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.arc( x+this.grid.sizeX/2, y+this.grid.sizeY/2, this.grid.sizeX/2, 0, 2 * Math.PI);
                            ctx.stroke();
                            break
                        case "transit":
                            for ( var i = 22 ; i < 50 ; i+=22){
                                ctx.moveTo(x+10, y + i);
                                ctx.lineTo(x+24,y+i);
                                ctx.stroke();
                                ctx.moveTo(x+26, y + i);
                                ctx.lineTo(x+40,y+i);
                                ctx.stroke();
                                ctx.moveTo(x+42, y + i);
                                ctx.lineTo(x+56,y+i);
                                ctx.stroke();
                              }
                                ctx.moveTo(x+20,y+10);
                                ctx.lineTo(x+20,y+34);
                                ctx.lineTo(x, y+22);
                                ctx.fill();
                                ctx.moveTo(x+44,y+32);
                                ctx.lineTo(x+44,y+56);
                                ctx.lineTo(x+66, y+44);
                                ctx.fill();
                            break
                        case "uparrow":
                            ctx.moveTo(x+camera.padding,y+this.grid.sizeY-camera.padding);
                            ctx.lineTo(x+this.grid.sizeX-camera.padding,y+this.grid.sizeY-camera.padding);
                            ctx.lineTo(x+this.grid.sizeX/2, y + camera.padding);
                            ctx.fill();
                            break
                        case "downarrow":
                            ctx.moveTo(x+camera.padding,y+camera.padding);
                            ctx.lineTo(x+this.grid.sizeX-camera.padding,y+camera.padding);
                            ctx.lineTo(x+this.grid.sizeX/2, y + this.grid.sizeY-camera.padding);
                            ctx.fill();
                            break
                        case "leftarrow":
                            ctx.moveTo(x+camera.padding,y+this.grid.sizeY/2);
                            ctx.lineTo(x+this.grid.sizeX-camera.padding,y+camera.padding);
                            ctx.lineTo(x + this.grid.sizeX - camera.padding, y + this.grid.sizeY - camera.padding);
                            ctx.fill();
                            break
                        case "rightarrow":
                            ctx.moveTo(x+camera.padding,y+camera.padding);
                            ctx.lineTo(x+camera.padding,y+this.grid.sizeY-camera.padding);
                            ctx.lineTo(x + this.grid.sizeX - camera.padding, y + this.grid.sizeY/2);
                            ctx.fill();
                            break
                        case "science":
/*                             ctx.beginPath();
                            ctx.fillStyle= this.art.bgColor;
                            ctx.moveTo(x+this.grid.sizeX*.3,y);
                            ctx.lineTo(x+this.grid.sizeX*.7,y);
                            ctx.lineTo(x+this.grid.sizeX*.7,y+this.grid.sizeY*.4);
                            ctx.lineTo(x+this.grid.sizeX,y+this.grid.sizeY);
                            ctx.lineTo(x,y + this.grid.sizeY);
                            ctx.lineTo(x+this.grid.sizeX*.3,y+this.grid.sizeY*.4);
                            ctx.fill();*/
                            ctx.font = this.grid.sizeY*.8 + "px glyphicons halflings";
                            ctx.fillText(String.fromCharCode(0xe233),x + this.grid.sizeX*.1 , y+this.grid.sizeY);

                            break
                        case "money":
                              ctx.font = this.grid.sizeY*.8 + "px glyphicons halflings";
                              ctx.fillText(String.fromCharCode(0xe183),x + this.grid.sizeX*.1 , y+this.grid.sizeY);
//&#xe019;&#xe183;
//                            ctx.font = this.grid.sizeY*1.5 + "px Arial";
//                            ctx.fillText(  "$", x + this.grid.sizeX*.1 , y+this.grid.sizeY );
                            break
                        case "people":
                            ctx.font = this.grid.sizeY*.8 + "px glyphicons halflings";
                            ctx.fillText(String.fromCharCode(0xe008),x + this.grid.sizeX*.1 , y+this.grid.sizeY);
                            break
                        case "poi":
                            ctx.font = this.grid.sizeY*.8 + "px glyphicons halflings";
                            ctx.fillText(String.fromCharCode(0xe003),x + this.grid.sizeX*.1 , y+this.grid.sizeY);
                            break
                        case "earth":
                              ctx.font = this.grid.sizeY*.8 + "px glyphicons halflings";
                              ctx.fillText(String.fromCharCode(0xe135),x + this.grid.sizeX*.1 , y+this.grid.sizeY);
                              break
                        case "settings":
                            ctx.font = this.grid.sizeY*.8 + "px glyphicons halflings";
                            ctx.fillText(String.fromCharCode(0xe019),x + this.grid.sizeX*.1 , y+this.grid.sizeY);
                            break

	                       case "galaxy":

                                 drawEllipse(x+this.grid.sizeX/2, y+this.grid.sizeY/2, this.grid.sizeX, this.grid.sizeY/4)
                                 drawEllipse(x+this.grid.sizeX/2, y+this.grid.sizeY/2, this.grid.sizeX/2.5, this.grid.sizeY/2.5)

//}
                        break
                        case "rectangle":
                            ctx.fillRect(x,y,this.grid.sizeX,this.grid.sizeY);
                        default:
                      }

              //texts
              if (  this.art.texts != undefined ){
                      if ( typeof this.art.texts == "object"){
                            for ( var i = 0 ; i < this.art.texts.length ; i ++ ){
                              ctx.font = this.grid.sizeY*.7*(1/this.art.texts.length) + "px Arial"; ctx.fillStyle=this.art.textColor;

                              ctx.fillText( this.art.texts[i]  , this.grid.x + this.art.textOffset[0] ,
                    //y components
                                  this.grid.y+this.grid.sizeY+ this.grid.sizeY*.75*(i/(this.art.texts.length-1)) - this.art.texts.length*this.grid.sizeY  *(1/this.art.texts.length) +  this.grid.sizeY*.7*(1/this.art.texts.length)  );
                      }} else {

                              ctx.font = this.grid.sizeY*.7 + "px Arial"; ctx.fillStyle=this.art.textColor;
                              ctx.fillText( this.art.texts  , this.grid.x + this.art.textOffset[0] , this.grid.y+this.grid.sizeY*.7 );

                      }

              }
              if ( this.art.dec !== undefined ) {this.art.dec(x,y,this.grid.sizeX);}
            }
      }


}


function drawEllipse(centerX, centerY, width, height) {

  ctx.beginPath();

  ctx.moveTo(centerX, centerY - height/2); // A1

  ctx.bezierCurveTo(
    centerX + width/2, centerY - height/2, // C1
    centerX + width/2, centerY + height/2, // C2
    centerX, centerY + height/2); // A2

  ctx.bezierCurveTo(
    centerX - width/2, centerY + height/2, // C3
    centerX - width/2, centerY - height/2, // C4
    centerX, centerY - height/2); // A1

  ctx.fill();
  ctx.closePath();
}
