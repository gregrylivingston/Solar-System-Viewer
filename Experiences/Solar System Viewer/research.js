
class research extends namedObject{
        constructor( research ){
          var details = {   name:research.name,
                        n:research.n,
                        size:[200,150],
                        description:["","","","",research.description,"","",""],
                        art:{bgColor:research.color,
                            bgShape:"rectangle",
                            texts:[research.name,"",research.description,"","",...research.texts],
                            textColor:"black",
                            textColor:"white",
                            textOffset:[10,30],
                          }
                         };
            super (details);

        }
}



var scienceViewHolder = new menu ({
                       grid:{x:100,y:100,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                       art:new art({bgColor:this.camera.menuColor,bgShape:"rectangle"}),
                         },
                         [new map({
                                type:"predefined",
                                 size:[8,4],
                                 coords:[0,0,0],
                                 art:{bgColor:camera.menuColor,bgShape:"rectangle"},
                                 grid:{x:0,y:0,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                                 displayOpt: {tileSpace:300,tileSpaceMulti:0 },

                                             tiles:[

                                                   new research ({color:"green",name:"Curiosity 1",n:0,description:"Basic Life Support",texts:["Enables:"," Crew Module"]}),
                                                      //curiosity like get a telescope so you can see the starts
                                                   new research ({color:"green",name:"Bio 2",n:1,description:"Medium Life Support",texts:["Enables:"," Crew Base"]}),
                                                   new research ({color:"green",name:"Bio 3",n:2,description:"Advanced Life Support",texts:["Enables:"," Advanced Crew Module"]}),
                                                   new research ({color:"green",name:"Bio 4",n:3,description:"Mega Life Support",texts:["Enables:","Animal Modules"]}),
                                                   new research ({color:"green",name:"Bio 6",n:0,description:"Bonus Life Support",texts:["Enables:","Planet Modules"]}),
                                                   new research ({color:"green",name:"Bio 7",n:1,description:"Extra Life Support",texts:["Enables:","Extra Modules"]}),
                                                   new research ({color:"green",name:"Bio 8",n:2,description:"Amazing Life Support",texts:["Enables:","Everything"]}),
                                                   new research ({color:"green",name:"Bio 9",n:3,description:"Incredible Life Support",texts:["Enables:","Yes, really everything"]}),

                                                   new research ({color:"blue",name:"Learning 1",n:0,description:"Basic Rocketry",texts:["Enables:"," Crew Module"]}),
                                                   new research ({color:"blue",name:"Physics 2",n:1,description:"Medium Rocketry",texts:["Enables:"," Crew Base"]}),
                                                   new research ({color:"blue",name:"Physics 3",n:2,description:"Advanced Rocketry",texts:["Enables:"," Advanced Crew Module"]}),
                                                   new research ({color:"blue",name:"Physics 4",n:3,description:"Mega Rocketry",texts:["Enables:","Animal Modules"]}),
                                                   new research ({color:"blue",name:"Physics 6",n:0,description:"Bonus Rocketry",texts:["Enables:","Planet Modules"]}),
                                                   new research ({color:"blue",name:"Physics 7",n:1,description:"Extra Rocketry",texts:["Enables:","Extra Modules"]}),
                                                   new research ({color:"blue",name:"Physics 8",n:2,description:"Amazing Rocketry",texts:["Enables:","Everything"]}),
                                                   new research ({color:"blue",name:"Physics 9",n:3,description:"Incredible Rocketry",texts:["Enables:","Yes, really everything"]}),

                                                   new research ({color:"purple",name:"Tenacity 1",n:0,description:"Basic Fuel Synthesis",texts:["Enables:"," Crew Module"]}),
                                                          //a  reward for failure or persistence
                                                   new research ({color:"purple",name:"Chemistry 2",n:1,description:"Medium Fuel Synthesis",texts:["Enables:"," Crew Base"]}),
                                                   new research ({color:"purple",name:"Chemistry 3",n:2,description:"Advanced Fuel Synthesis",texts:["Enables:"," Advanced Crew Module"]}),
                                                   new research ({color:"purple",name:"Chemistry 4",n:3,description:"Mega Fuel Synthesis",texts:["Enables:","Animal Modules"]}),
                                                   new research ({color:"purple",name:"Chemistry 6",n:0,description:"Bonus Fuel Synthesis",texts:["Enables:","Planet Modules"]}),
                                                   new research ({color:"purple",name:"Chemistry 7",n:1,description:"Extra Fuel Synthesis",texts:["Enables:","Extra Modules"]}),
                                                   new research ({color:"purple",name:"Chemistry 8",n:2,description:"Amazing Fuel Synthesis",texts:["Enables:","Everything"]}),
                                                   new research ({color:"purple",name:"Chemistry 9",n:3,description:"Incredible Fuel Synthesis",texts:["Enables:","Yes, really everything"]}),

                                                   new research ({color:"orange",name:"Acumen 1",n:0,description:"Basic Mining",texts:["Enables:"," Crew Module"]}),
                                                          //acumen like raise some money to start a spaceship company
                                                          //this is a reward for accomplishing milestones(!)
                                                   new research ({color:"orange",name:"Geology 2",n:1,description:"Medium Mining",texts:["Enables:"," Crew Base"]}),
                                                   new research ({color:"orange",name:"Geology 3",n:2,description:"Advanced Mining",texts:["Enables:"," Advanced Crew Module"]}),
                                                   new research ({color:"orange",name:"Geology 4",n:3,description:"Mega Mining",texts:["Enables:","Animal Modules"]}),
                                                   new research ({color:"orange",name:"Geology 6",n:0,description:"Bonus Mining",texts:["Enables:","Planet Modules"]}),
                                                   new research ({color:"orange",name:"Geology 7",n:1,description:"Extra Mining",texts:["Enables:","Extra Modules"]}),
                                                   new research ({color:"orange",name:"Geology 8",n:2,description:"Amazing Mining",texts:["Enables:","Everything"]}),
                                                   new research ({color:"orange",name:"Geology 9",n:3,description:"Incredible Mining",texts:["Enables:","Yes, really everything"]}),
                                               ],
                                             }
                         )
                         ]
                       );
