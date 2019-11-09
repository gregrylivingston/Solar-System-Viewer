
//THIS DOESN'T ACTUALLY HAVE PROPERTIES DIFFERENT FROM A BUTTON, DOES IT???
class tile extends button{
      constructor( gameObjectructor){
          super(gameObjectConstructor);


      }




}


//clickable may need more parameters....
//like function , parent object, child object , hover text
function clickTile (params){
    selectedTile = params.i;
    console.log("selectedTile = " + params.i);

//if planet view - select the "Area".  Click surface, or go-to by the map to open that region
//if "Area" view - select the tile.
//clearly object commonalities and clear rules will help here!



}




const tiles = [
        { //0 Grass
          type:"Grass",
          color:"rgb(20,160,50)",
          decoration: function ( x,y , tileSize ){
            ctx.beginPath();
            ctx.fillStyle="rgb(100,100,60)";
            ctx.rect(x + tileSize*.33,y + tileSize*.34, 2 ,3 );
            ctx.rect((x + tileSize*.7 ),y + tileSize*.54, 2  ,3 );
            ctx.rect(x + tileSize*.12,y + tileSize*.8, 2 ,3 );
            ctx.rect((x + tileSize*.2 ),y + tileSize*.53, 2  ,3 );
            ctx.fill();
            ctx.closePath();
        },
      },
        { //1 Concrete
          type:"Concrete Foundation",
          color:"rgb(120,120,120)",
          decoration: function ( x,y , tileSize ){

          },
        },
        { //2 Road
          type:"Road",
          color:"rgb(120,120,120)",
          decoration: function ( x,y , tileSize ,opt=null ){
            switch (opt){
              case 1:

                  ctx.beginPath();
                  ctx.fillStyle="white";
                  ctx.rect(x,y + tileSize*.8 , tileSize ,1 );
                  ctx.rect((x ),y + tileSize*.2, tileSize  ,1 );
                  ctx.rect((x + tileSize*.25 ),y + tileSize*.5, tileSize/6  ,1);
                  ctx.rect((x + tileSize*.75 ),y + tileSize*.5, tileSize/6  ,1);
                  ctx.fill();
                  ctx.closePath();
                  break
              case -1:
                  ctx.beginPath();
                  ctx.fillStyle="white";
                  ctx.rect(x + tileSize*.8,y , 1 ,tileSize );
                  ctx.rect((x + tileSize*.2 ),y, 1  ,tileSize );
                  ctx.rect((x + tileSize*.5 ),y + tileSize*.25, 1  ,tileSize/6 );
                  ctx.rect((x + tileSize*.5 ),y + tileSize*.75, 1  ,tileSize/6 );
                  ctx.fill();
                  ctx.closePath();
                  break
              case 0:
              default:
                ctx.beginPath();
                ctx.fillStyle="white";
                ctx.rect(x + tileSize*.8,y , 1 ,tileSize *.2);
                ctx.rect(x + tileSize*.8,y + tileSize*.8 , 1 ,tileSize *.2);
                ctx.rect(x + tileSize*.2,y , 1 ,tileSize *.2);
                ctx.rect(x + tileSize*.2,y + tileSize*.8 , 1 ,tileSize *.2);
                ctx.rect(x,y + tileSize*.8 , tileSize*.2 ,1 );
                ctx.rect((x ),y + tileSize*.2, tileSize*.2  ,1 );
                ctx.rect((x+tileSize*.8),y + tileSize*.8 , tileSize*.2 ,1 );
                ctx.rect((x+tileSize*.8 ),y + tileSize*.2, tileSize*.2  ,1 );
                ctx.fill();
                ctx.closePath();
            }
          }
        },

        { //3 Sand
          type:"Sand",
          color:"rgb(180,160,100)",
          decoration: function ( x,y , tileSize ){
            ctx.beginPath();
            ctx.fillStyle="rgb(100,100,60)";
            ctx.rect(x + tileSize/2,y + tileSize/1.5, 4 ,3 );
            ctx.rect((x + tileSize/4 ),y + tileSize/3, 4  ,3 );
            ctx.rect(x + tileSize/3,y + tileSize/2, 4 ,3 );
            ctx.rect((x + tileSize/1.2 ),y + tileSize/4, 4  ,3 );
            ctx.fill();
            ctx.closePath();
          },
        },
        { //4 Dirt
          type:"Dirt",
          color:"rgb(100,100,80)",
          decoration: function ( x,y , tileSize ){
            ctx.beginPath();
            ctx.fillStyle="rgb(50,50,60)";
            ctx.rect(x + tileSize/2,y + tileSize/1.5, 4 ,3 );
            ctx.rect((x + tileSize/4 ),y + tileSize/3, 4  ,3 );
            ctx.rect(x + tileSize/3,y + tileSize/2, 4 ,3 );
            ctx.rect((x + tileSize/1.2 ),y + tileSize/4, 4  ,3 );
            ctx.fill();
            ctx.closePath();
          },

        },
        { //5 Water
            type:"Water",
            color:"rgb(0,100,200)",
            decoration: function ( x,y , tileSize ){
              ctx.beginPath();
              ctx.strokeStyle="white";
              ctx.lineWidth=1;

              ctx.moveTo(x + tileSize*.1,y + tileSize*.2);
              ctx.lineTo(x + tileSize*.2,y + tileSize*.225);
              ctx.lineTo(x + tileSize*.3,y + tileSize*.2);
              ctx.lineTo(x + tileSize*.4,y + tileSize*.225);
              ctx.stroke();
              ctx.moveTo(x + tileSize*.6,y + tileSize*.4);
              ctx.lineTo(x + tileSize*.7,y + tileSize*.425);
              ctx.lineTo(x + tileSize*.8,y + tileSize*.4);
              ctx.lineTo(x + tileSize*.9,y + tileSize*.45);
              ctx.stroke();
              ctx.moveTo(x + tileSize*.1,y + tileSize*.6);
              ctx.lineTo(x + tileSize*.2,y + tileSize*.625);
              ctx.lineTo(x + tileSize*.3,y + tileSize*.6);
              ctx.lineTo(x + tileSize*.4,y + tileSize*.625);
              ctx.stroke();
              ctx.moveTo(x + tileSize*.6,y + tileSize*.8);
              ctx.lineTo(x + tileSize*.7,y + tileSize*.825);
              ctx.lineTo(x + tileSize*.8,y + tileSize*.8);
              ctx.lineTo(x + tileSize*.9,y + tileSize*.85);
              ctx.stroke();
              ctx.closePath();
            },
        },
        { //6 Mountains
            type:"Mountains",
            color:"rgb(100,100,100)",
            decoration: function ( x,y , tileSize ){
              ctx.beginPath();
              ctx.strokeStyle="rgb(160,160,160)";
              ctx.lineWidth=1;
              ctx.moveTo(x + tileSize*.2,y + tileSize*.7);
              ctx.lineTo(x + tileSize*.4,y + tileSize*.2);
              ctx.lineTo(x + tileSize*.6,y + tileSize*.7);
              ctx.stroke();
              ctx.moveTo(x + tileSize*.4,y + tileSize*.8);
              ctx.lineTo(x + tileSize*.6,y + tileSize*.3);
              ctx.lineTo(x + tileSize*.8,y + tileSize*.8);
              ctx.stroke();
              ctx.closePath();
            },
        },
        {},//7hills
        { //8forest
          type:"Forest",
          color:"rgb(20,140,30)",
          decoration: function ( x,y , tileSize ){
            ctx.beginPath();
            ctx.fillStyle="rgb(100,100,60)";
            ctx.font = tileSize*.4 + "px glyphicons halflings";
            ctx.fillText(String.fromCharCode(0xe199)+String.fromCharCode(0xe199),x + tileSize*.1 , y+tileSize/2 - tileSize*.1);
            ctx.fillText(String.fromCharCode(0xe199)+String.fromCharCode(0xe199),x+ tileSize*.1 , y+tileSize - tileSize*.1);
                        ctx.closePath();
          }
        },//
        { //9forest&#xe199;
          type:"Forest",
          color:"rgb(20,140,30)",
          decoration: function ( x,y , tileSize ){
            ctx.beginPath();
            ctx.fillStyle="rgb(100,100,60)";
            ctx.font = tileSize*.4 + "px glyphicons halflings";
            ctx.fillText(String.fromCharCode(0xe200)+String.fromCharCode(0xe200),x + tileSize*.1 , y+tileSize/2 - tileSize*.1);
            ctx.fillText(String.fromCharCode(0xe200)+String.fromCharCode(0xe200),x+ tileSize*.1 , y+tileSize - tileSize*.1);

            ctx.closePath();
          }
        },
        { //10 Space Dust
          type:"Space Dust",
          color:"rgb(100,100,100)",
          decoration: function ( x,y , tileSize ){
            ctx.beginPath();
            ctx.fillStyle="rgb(50,50,60)";
            ctx.rect(x + tileSize*.34,y + tileSize*.73, 2 ,2 );
            ctx.rect((x + tileSize*.54 ),y + tileSize/3, 2  ,2 );
            ctx.rect(x + tileSize*.64,y + tileSize/2, 2 ,2 );
            ctx.rect((x + tileSize*.13 ),y + tileSize*.4, 2  ,2 );
            ctx.fill();
            ctx.closePath();
          },
        },
        { //11 Concrete
          type:"Concrete Foundation",
          color:"rgb(120,120,120)",
          decoration: function ( x,y , tileSize ){

          },
        },
        { //12 AirLock
          type:"Airlock",
          color:"rgb(120,120,120)",
          decoration: function ( x,y , tileSize ,opt=null ){
            switch (opt){
              case 1:

                  ctx.beginPath();
                  ctx.fillStyle="white";
                  ctx.rect(x,y +tileSize*.4, tileSize ,tileSize*.2 );
                  ctx.fill();
                  ctx.closePath();
                  break
              case -1:
                  ctx.beginPath();
                  ctx.fillStyle="white";
                  ctx.rect(x + tileSize*.4,y , tileSize*.2 ,tileSize );

                  ctx.fill();
                  ctx.closePath();
                  break
              case 0:
              default:
                ctx.beginPath();
                ctx.fillStyle="white";
                ctx.rect(x + tileSize*.4,y , tileSize*.2 ,tileSize );
                ctx.rect(x,y +tileSize*.4, tileSize ,tileSize*.2 );
                ctx.fill();
                ctx.closePath();
            }
          }
        },
        { //13 Rock
          type:"Rock",
          color:"rgb(100,100,100)",
          decoration: function ( x,y , tileSize ,opt=null ){
            ctx.beginPath();
            ctx.fillStyle="rgb(50,50,60)";
            ctx.rect(x + tileSize/2,y + tileSize/1.5, 4 ,3 );
            ctx.rect((x + tileSize/4 ),y + tileSize/3, 4  ,3 );
            ctx.rect(x + tileSize/3,y + tileSize/2, 4 ,3 );
            ctx.rect((x + tileSize/1.2 ),y + tileSize/4, 4  ,3 );
            ctx.fill();
            ctx.closePath();

          }
        },
        { //14 ice
          type:"Ice",
          color:"white",
          decoration: function ( x,y , tileSize ,opt=null ){

          }
        },
        { //15 Crevice
          type:"Crevice",
          color:"rgb(80,50,50)",
          decoration: function ( x,y , tileSize ,opt=null ){

          }
        },
        { //16 Mountains
            type:"Mountain",
            color:"rgb(120,80,80)",
            decoration: function ( x,y , tileSize ){
              ctx.beginPath();
              ctx.strokeStyle="rgb(160,160,160)";
              ctx.lineWidth=1;
              ctx.moveTo(x + tileSize*.2,y + tileSize*.8);
              ctx.lineTo(x + tileSize*.35,y + tileSize*.3);
              ctx.lineTo(x + tileSize*.5,y + tileSize*.5);
              ctx.lineTo(x + tileSize*.65,y + tileSize*.4);
              ctx.lineTo(x + tileSize*.8,y + tileSize*.8);
              ctx.stroke();
              ctx.closePath();
            },
        },
        {//17

        },
        {//18

        },
        {//19
        },
        {//20
              type:"Space",
              color:"rgb(20,20,20)",
              decoration: function (x,y,tileSize){}

        },
        {//21
              type:"Frame",
              color:"rgb(20,20,20)",
              decoration: function (x,y,tileSize){}

        },
        {//22
              type:"Module",
              color:"rgb(20,20,20)",
              decoration: function (x,y,tileSize){}

        },
        {//23
              type:"Rock",
              color:"rgb(150,100,100)",
              decoration: function (x,y,tileSize){
                    ctx.beginPath();
                    ctx.fillStyle="rgb(50,50,60)";
                    ctx.rect(x + tileSize/2,y + tileSize/1.5, 4 ,5 );
                    ctx.rect((x + tileSize/4 ),y + tileSize/3, 4  ,3 );
                    ctx.rect(x + tileSize/3,y + tileSize/2, 5 ,3 );
                    ctx.rect((x + tileSize/1.2 ),y + tileSize/4, 4  ,3 );
                    ctx.fill();
                    ctx.closePath();
              }

        },
        {//24
              type:"Dust",
              color:"rgb(130,100,100)",
              decoration: function (x,y,tileSize){
                ctx.beginPath();
                ctx.fillStyle="rgb(50,50,60)";
                ctx.rect(x + tileSize*.34,y + tileSize*.73, 2 ,2 );
                ctx.rect((x + tileSize*.54 ),y + tileSize/3, 2  ,2 );
                ctx.rect(x + tileSize*.64,y + tileSize/2, 2 ,2 );
                ctx.rect((x + tileSize*.13 ),y + tileSize*.4, 2  ,2 );
                ctx.fill();
                ctx.closePath();

              }

        },
        {//25
              type:"Plasma",
              color:"rgb(230,230,160)",
              decoration: function (x,y,tileSize){}

        },
        {//26
              type:"Hydrogen Clouds",
              color:colorCollection.Sand,
              decoration: function (x,y,tileSize){}

        }
        //7 hills , swamp , what else?
        //8
        //9

];

 // kind of a cool old timey effect over top!
/*    var fraction = 500;
    var rand = Math.random(0,100);
    for ( var n = 0 ; n < fraction ; n ++ ){
        ctx.beginPath();
        ctx.moveTo(0 + 1,  ( n * window.innerHeight/(fraction/2)) + rand  );
        ctx.lineTo(window.innerWidth - 1, n * window.innerHeight/(fraction/2) + rand);
        ctx.stroke();
      }
      */
