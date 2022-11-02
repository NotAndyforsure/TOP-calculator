
function resFind(symb,num1,num2){

    switch(symb){
        
        case "+":
            return num1 + num2
        break;

        case "-":
           return num1 - num2
        break;

        case "*":
            return num1 + num2
        break;

        case "%":
            return (num1/100) * num2
        break;

        case "÷":
            return num1/num2
        break;

    }
}


// Arithmatic engine//////////////////////////////////////////////////////////////////////


let negVar=""
let howMannyAriSymb=0
let calcres=0




let button=document.querySelectorAll(".cell")
let screen=document.querySelector("#calc-screen")
let res=document.querySelector("#calc-res")



button.forEach((ele)=>

    ele.addEventListener("click",function(e){

        e.stopPropagation()

        if(this.dataset.value===undefined){

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



        if(this.dataset.value==1 && negVar!="" && howMannyAriSymb ==0){

            howMannyAriSymb=1

            negVar+=` ${this.textContent} `

            return screen.textContent+=` ${this.textContent} `


        }


        //Show Arithmetic symbol////////////////////////////////////////////////////////////////////////////





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

                return screen.textContent=`${negVar}`   

            }


          


        }


        //deleting behavior////////////////////////////////////////////////////////////////////////////////////



        if(this.dataset.value == 4 && negVar != ""){

            howMannyAriSymb=0
            negVar=""
            screen.textContent=""
            res.textContent="0"

        }

        // clear behavior///////////////////////////////////////////////////////////////////////////////////////////








    })
)







//screen typing function////////////////////////////////////////////////////////////////////////////////
















