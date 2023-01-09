// 1. type number in textbox

function typeNumber(ctrl) {
    let textbox = document.getElementById("textbox");
    let value = textbox.value;
    
    if (ctrl.innerText == ".") {
        // alert("dot");

        if (value.indexOf(".") != -1) {
            return;
        }
    }
    let number = value + ctrl.innerText;
    textbox.value = number;
}

// function typeNumber8(){
//     let textbox = document.getElementById("textbox");
//     let value = 
//     textbox.value += "8"; 
// }

// 2. CE button to clear all textbox

function clearAll() {
    let textbox = document.getElementById("textbox");
    //let textboxhistory = document.getElementById("textboxhistory");
    textbox.value = "";
    //textboxhistory.value = "";
}

// 3. Back button to clear one textbox input

function clearOne() {
    let textbox = document.getElementById("textbox");
    let text = textbox.value;
    // alert(text)
    let length = text.length;
    // alert(length)
    if (length > 0) {
        newText = text.slice(0, (length - 1));
        textbox.value = newText;
    }
}

// 4. . operation

let operator = "";
function operation(ctrl) {
    let textbox = document.getElementById("textbox");

    //let textboxhistory = document.getElementById("textboxhistory");
    //textboxhistory.value = textbox.value;
    //textbox.value = "";

    operator = ctrl.innerText;
    //alert(operator)
    let value = textbox.value;
    // if(value.indexOf("-")==operator){
    //     alert(1)
    //     //value = textbox.value
    // }
    if(value.charAt(0)==""){
        
            return
        
    }
    //if(value.charAt(0)=="" || value.charAt(0)=="+" || value.charAt(0)=="*" || value.charAt(0)=="/"){
        // try{
        //     value.charAt(0)="";
        // }
        // catch(error){

        // }
    
    textbox.value = value + operator;
 
}




// function ope(){
//     try{
//         let res = eval("10+25*15-5");
//     console.log(res);
//     }
//   catch(ex){
//     console.log("some error");
//   }
// }

//  calculate using eval()

function calculate(ctrl){
    
    let textbox = document.getElementById("textbox");
     let a = textbox.value;

    if(a.charAt(0)== "" ){
        return
    }
    else{
        let ans = eval(a);
        textbox.value = ans;

    }


   

}








