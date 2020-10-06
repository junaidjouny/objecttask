let members = {
    son1:"john <br>",
    son2:"jack <br>",
    son3:"david <br>",
        john : {
            son1:"cris <br>",
            son2:"alex <br>",
               cris:{
            son1:"ali <br>",
            son2:"karim <br>",
                    },
                alex : {
      son1 : "john <br>",
      son2 : "alex <br>",
      son3 : "garret <br>",
      son4 : "wood <br>",
      son5 : "hales <br>",

                    john:{
        son1 : "ali <br>",
        son2 : "jack <br>",
                    ali:{
      son1 : "suleiman <br>",
      son2 : "usman <br>",
      son3 : "salman <br>",
      son4 : "javed <br>",
          suleiman:{
            son1 : "kareem <br>",
            son2 : "raheem <br>",
               raheem:{
                son1 : "nadeem <br>",
                son2 : "kaleem <br>",
                    kaleem:{
                        son1 : "amir <br>",
                        son2 : "liaqat <br>",
                    }
               }
          } 

        }
      },
        wood:{
      son1 : "chris <br>",
      son2 : "roy <br>",
      son3 : "max <br>",
      son4 : "nova <br>",
      son5 : "root <br>",
      son6 : "mark <br>",
             max:{
                son1 : "usman <br>",
                son2 : "salman <br>",
                son3 : "javed <br>",
                son4 : "mark <br>",
                son5 : "alex <br>",
             },
             mark:{
                son1 : "morgan <br>",
                son2 : "watson <br>",
             }
        }
    } 
           }  ,
             
         jack:{
            son1 : "Kevin <br>",
            son2 : "DerekWood <br>",
         },
         david:{
            son1 : "kegan <br>",
            kegan:{
                son1 : "alex <br>",
                alex:{
                    son1 : "jackma <br>",
                    son2 : "bill <br>", 
                         jackma:{
                            son1 : "keven <br>",
                            son2 : "derek <br>",
                            son3 : "trump <br>",
                            son4 : "obama <br>",
                            son5 : "bush <br>",
                         },
                         bill:{
                            son1 : "robert <br>",
                            son2 : "john <br>",
                         }
                }
            }
         }
        
        };
        function printValues(obj) {
            for (var key in obj) {
                if (typeof obj[key] != "object") {
                    document.write(obj[key]); 
                       
                } else {
                    printValues(obj[key]);  
                }
            }
        }
        


        printValues("<h2>These are Suleiman sons</h2>"+ members.john.alex.john.ali.suleiman.son1);
        document.writeln(members.john.alex.john.ali.suleiman.son2);
        
        printValues("<h2>These are all family members</h2>");
        printValues(members);

        delete members.david.kegan.alex.jackma.son4;
        delete members.david.kegan.alex.jackma.son5;
        
        printValues("<h2>Updated family members after removing Jackma two sons</h2>");
        printValues(members);
        
        document.writeln("<br>Before Change name : " + " " + members.david.kegan.alex.jackma.son3);
        members.david.kegan.alex.jackma.son3 = "Donald Trump";
        document.write("After Change name : " + " " + members.david.kegan.alex.jackma.son3);

        document.write("</br>");
        document.writeln("<br>Before Change name : " + " " + members.jack.son2);
        members.jack.son2 = "DerekKhan";
        document.write("After Change name : " + " " + members.jack.son2);
        

    