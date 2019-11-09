

var transfers = new menu ({
                       grid:{x:100,y:100,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                       art:new art({bgColor:this.camera.menuColor,bgShape:"rectangle"}),
                         },
                         [new map({
                                type:"predefined",
                                 size:[3,8],
                                 coords:[0,0,0],
                                 art:{bgColor:camera.menuColor,bgShape:"rectangle"},
                                 grid:{x:0,y:0,sizeX:window.innerWidth*.75-112,sizeY:window.innerHeight-200},
                                 displayOpt: {tileSpace:400,tileSpaceMulti:0 },

                                             tiles:[

                                                   new namedObject (
                                                                  {art:{bgColor:"rgb(0,0,0,.2)",bgShape:"rectangle",
                                                                          texts:"Object",
                                                                          textColor:"white",
                                                                          textOffset:[10,10]},
                                                                  grid:{x:0,y:0,sizeX:200,sizeY:50},
                                                                  name:"Geology 1",
                                                                  n:"n",
                                                                  description:"Basic Mining",}),
                                                  new namedObject (
                                                                 {art:{bgColor:"rgb(0,0,0,.2)",bgShape:"rectangle",
                                                                         texts:"Origin",
                                                                         textColor:"white",
                                                                         textOffset:[10,10]},
                                                                 grid:{x:0,y:0,sizeX:200,sizeY:50},
                                                                 name:"Geology 1",
                                                                 n:"n",
                                                                 description:"Basic Mining",
                                                  }),
                                                  new namedObject (
                                                                 {art:{bgColor:"rgb(0,0,0,.2)",bgShape:"rectangle",
                                                                         texts:"Destination",
                                                                         textColor:"white",
                                                                         textOffset:[10,10]},
                                                                 grid:{x:0,y:0,sizeX:200,sizeY:50},
                                                                 name:"Geology 1",
                                                                 n:"n",
                                                                 description:"Basic Mining",
                                                  }),
                                                  new namedObject (
                                                                 {art:{bgColor:"rgb(0,0,0,.2)",bgShape:"rectangle",
                                                                         texts:"Probe",
                                                                         textColor:"white",
                                                                         textOffset:[10,10]},
                                                                 grid:{x:0,y:0,sizeX:200,sizeY:30},
                                                                 name:"Geology 1",
                                                                 n:"n",
                                                                 description:"Basic Mining",}),
                                                 new namedObject (
                                                                {art:{bgColor:"rgb(0,0,0,.2)",bgShape:"rectangle",
                                                                        texts:"Earth",
                                                                        textColor:"white",
                                                                        textOffset:[10,10]},
                                                                grid:{x:0,y:0,sizeX:200,sizeY:30},
                                                                name:"Geology 1",
                                                                n:"n",
                                                                description:"Basic Mining",
                                                 }),
                                                 new namedObject (
                                                                {art:{bgColor:"rgb(0,0,0,.2)",bgShape:"rectangle",
                                                                        texts:"Moon",
                                                                        textColor:"white",
                                                                        textOffset:[10,10]},
                                                                grid:{x:0,y:0,sizeX:200,sizeY:30},
                                                                name:"Geology 1",
                                                                n:"n",
                                                                description:"Basic Mining",
                                                 })
                                            ],
                                  }
                         )
                         ]
                       );
