
var myButtons = [];


function drawButtons(){

    myButtons.forEach(function (button) {
        button.drawButton();

    })
}

//adds click - takes action,target,hoverText
        //should switch this to "action","params","hoverObj"
class button extends gameObject{
    constructor ( gameObjectConstructor ){

        super ( gameObjectConstructor );
        this.clickStorage = gameObjectConstructor.click;
/*        if ( gameObjectConstructor.click.hoverObj === undefined ) this.clickStorage.hoverObj = {texts:""};
        if ( gameObjectConstructor.click.hoverObj.x === undefined ) this.clickStorage.hoverObj.x = this.grid.x;
        if ( gameObjectConstructor.click.hoverObj.y === undefined ) this.clickStorage.hoverObj.y = this.grid.y+100;
        if ( gameObjectConstructor.click.hoverObj.texts === undefined ) this.click.hoverObj.texts = ["words"];
  */      }

    draw(){
        this.click = ( new mouseClick ( this.grid.x , this.grid.y , this.grid.sizeX , this.grid.sizeY
                                      ,this.clickStorage.action,this.clickStorage.params,this.clickStorage.hoverObj , this));
        clickFinder.unshift(this.click);
        super.draw();

    }
}
