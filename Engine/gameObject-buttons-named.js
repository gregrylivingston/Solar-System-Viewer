

/*
    required parameters
        art
        name
        n
        description
        grid



*/


class namedObject extends button{
        constructor( details ){
            var gameObjectConstructor = {};
            gameObjectConstructor.art = details.art;
            if ( details.grid === undefined ) gameObjectConstructor.grid = {x:0,y:0,sizeX:details.size[0],sizeY:details.size[1]};
            else gameObjectConstructor.grid = details.grid;
            if ( details.click == undefined ) {
                    gameObjectConstructor.click = {action:select,params:{item:null},hoverObj:{texts:[details.name]}};
            } else { gameObjectConstructor.click = details.click;  }

            super(gameObjectConstructor);
            this.clickStorage =        {action:select,params:{item:this},hoverObj:{texts:[details.name]}}
            this.name = details.name; //this should go to a generic object
            this.n = details.n; //this should go to a generic object
            this.description = details.description;  //this should go to a generic object

        }
        draw(){
          super.draw();}

}

/*

      ---- params should actually just be a user difined function here - like why is all this planet code here????

*/

function select( params){


      camera.selectedItem = params.item;
      myViews.detailsMenu.objects[1].art = camera.selectedItem.art;
      myViews.detailsMenu.objects[2].art.texts = [camera.selectedItem.name,""];
      myViews.detailsMenu.objects[3].art.texts = camera.selectedItem.description;

  //  camera.views.top.objects[2].art.texts ["YeS"]
            //         art:new art({bgColor:"white",bgShape:"rectangle"},{texts:["Ouch!",camera.selectedItem.name],textColor:"black"})

  if ( camera.loop == false ) draw.draw();

}
