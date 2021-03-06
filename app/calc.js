var optState = false;
var opt='';
var result = 0;

var btnDigit = document.querySelectorAll('.btnDigit');
var screen = document.querySelector('.screen');
var btnOpt = document.querySelectorAll('.btnOpt');
var btnReset = document.querySelector('.btnReset');
var btnEqual = document.querySelector('.btnEqual');
var btnDelete = document.querySelector('.btnDelete');
var btnDot = document.querySelector('.btnDot');


btnDigit.forEach(function(element){
    element.onclick = function(e){

        if(screen.textContent=="399,981" || screen.textContent=="0" || optState){
            screen.textContent="";
        }

        // console.log(screen.textContent)
        screen.textContent+= this.textContent;
        optState= false;
    }
});

btnOpt.forEach(function(element){
    element.onclick = function(e){
        // console.log(element.textContent)

        optState = true;
        var newOptState = this.textContent

        switch(opt){
            case "+": screen.textContent= (result + Number(screen.textContent));break;
            case "-": screen.textContent= (result - Number(screen.textContent));break;
            case "x": screen.textContent= (result * Number(screen.textContent));break;
            case "/": screen.textContent= (result / Number(screen.textContent));break;
            default: break;
        }
        screen.textContent= " "+ screen.textContent + " " + newOptState;
        result= Number(screen.textContent);
        opt= newOptState;
    }
});


btnEqual.onclick= function(e){
    screen.textContent="";
    optState=true;

    switch(opt){
        case "+": screen.textContent= (result + Number(screen.textContent));break;
        case "-": screen.textContent= (result - Number(screen.textContent));break;
        case "x": screen.textContent= (result * Number(screen.textContent));break;
        case "/": screen.textContent= (result / Number(screen.textContent));break;
        default: break;
    }
    result = Number(screen.textContent);
    screen.textContent=result;
    //result=0;
    opt="";
}


btnDot.onclick= function(e){
    if(!optState && !screen.textContent.includes(".")){
        screen.textContent +=".";
    }
    else if(optState){
        screen.textContent="0"
    }
    if(!screen.textContent.includes(".")){
        screen.textContent+=".";
    }
    optState = false;
}

reset =()=>{
    operator ='';
    screen.textContent ="0";
    result = 0;
}
btnReset.addEventListener('click', reset);

back =()=> {
    var value = screen.textContent.value;
    if(value != null){
        value = value.substr(0, value.length - 1);
    }
}

btnDelete.addEventListener('click', back);

/* 

btnDigit.forEach(button =>{
    button.addEventListener('click',()=>{
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    });
});


*/