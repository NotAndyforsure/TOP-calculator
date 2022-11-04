
function findRes(symb,num1,num2){

    if(typeof num1==="number" && typeof num2==="number"){

        let x=0

        switch(symb){

            
            case "+":
                
                x=num1 + num2
                return x
            
            break;

            case "-":

                x=num1 - num2

                return x
            
            break;

            case "x":

                x=num1 * num2

                return x
            
            break;

            case "%":

                x=num1/100 * num2

                return x
            
            break;

            case "÷":
                x=num1/num2
                return x
            break;

        }

                
    }else{

        howMannyAriSymb=0
        res.textContent="0"
        num1=0
        num2=0
        result=0


       return "ERROR!"


        

    }

       
}


// Arithmatic engine//////////////////////////////////////////////////////////////////////









let negVar=""
let howMannyAriSymb=0
let calcres=0
let num1=0
let num2=0
let symb=""
let result=0
let wait="off"




let button=document.querySelectorAll(".cell")
let screen=document.querySelector("#calc-screen")
let res=document.querySelector("#calc-res")


//Variables bank////////////////////////////////////////////////////////////////////////////////////////














button.forEach((ele)=>

    ele.addEventListener("click",function(e){

        e.stopPropagation()

        if(this.dataset.value===undefined){

            wait="on"

            if(negVar=="" && this.textContent=="(-)" || negVar[negVar.length-1]===" "){

                negVar+=`${this.textContent}`

                return screen.textContent+=`${this.textContent}`

            }else if(negVar!="" && this.textContent=="(-)"){

                return screen.textContent=screen.textContent

            }else if(this.textContent !== "(-)"){

                negVar+=`${this.textContent}`

                return screen.textContent+=`${this.textContent}`


            }
           
            
           
        }

        //number display positive and negative floats//////////////////////////////////////////////////////////










        if(this.dataset.value==1){
           

            if(negVar!="" && howMannyAriSymb ==0){

                howMannyAriSymb=1

                negVar+=` ${this.textContent} `

    
                return screen.textContent+=` ${this.textContent} `




            }else if(negVar==="" && howMannyAriSymb == 0 && result!=0 && wait==="off"){

                howMannyAriSymb=1

                negVar=`${result}` + ` ${this.textContent} `
    
                return screen.textContent=`${res.textContent}` + ` ${this.textContent} `


            }

          



        }


        //Arithmetic operator symbol behavior////////////////////////////////////////////////////////////////////////////

















        if(this.dataset.value==3 && negVar!=""){
           
            let strLength=screen.textContent.length
            let symbRegex=/[+-x%÷]/
            let text=`${negVar.substring(strLength - 3, strLength - 1)}`
           
          

            if( symbRegex.test(text)===true && negVar[negVar.length-1]==" "){

                howMannyAriSymb=0
                negVar=`${screen.textContent.substring(0,strLength - 3)}` 

                return screen.textContent=`${negVar}` 

            }else if(symbRegex.test(text)===true || negVar[negVar.length-1]==="." || negVar.length > 0){

                if(negVar[negVar.length-1] ===")"){
                    
                   let length=negVar.length

                   negVar=negVar.substring(0,length-3)
                    screen.textContent=negVar
    
                }


                negVar=`${screen.textContent.substring(0,strLength - 1)}` 

                screen.textContent=`${negVar}`
                
                if(negVar.length===0){

                    wait="off"
                }

            }


          


        }


        //deleting behavior////////////////////////////////////////////////////////////////////////////////////


















        if(this.dataset.value == 4){

            howMannyAriSymb=0
            negVar=""
            screen.textContent=""
            res.textContent="0"
            num1=0
            num2=0
            result=0

        }

        // clear behavior///////////////////////////////////////////////////////////////////////////////////////////


















        if(this.dataset.value==2){

            if(negVar.split(" ").length==3){


                let splitter=negVar.split(" ")
                
                num1=parseFloat(splitter[0])
                num2=parseFloat(splitter[2])



                if(splitter[0].substring(0,1)=="("){

                    let x= splitter[0].substring(3,splitter[0].length)

                    num1=-parseInt(x)
                
                }

                if(splitter[2].substring(0,1)=="("){


                    
                    let y= splitter[2].substring(3,splitter[2].length)

                    num2=-parseInt(y)

        
                }




                
                result=findRes(splitter[1],num1,num2)

                if(result>=0){

                    res.textContent=result.toFixed(2)
                    howMannyAriSymb=0
                    screen.textContent=""
                    negVar=""
                    wait="off"
                }else{

                    let negResult=result.toFixed(2)

                    res.textContent=`(-)${negResult.substring(1,negResult.length)}`
                    howMannyAriSymb=0
                    screen.textContent=""
                    negVar=""
                    wait="off"

                }
               
               
        


            }else{

                return screen.textContent=findRes("a","a","a")
           
            }

                
        }



        //Equal sign behavior//////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    })
)




















