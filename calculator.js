let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
       try{
        if (e.target.innerText=='C'){
            display.innerText = '';
        }
        else if ( e.target.innerText =='←'){
            if(display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
        }
         else if (e.target.innerText=='='){
            display.innerText =  eval(display.innerText);
           
        }
        else{
      
            display.innerText += e.target.innerText; 
        }
       }catch(e){
        display.innerText='Invalid Input'
       }
     /*  switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            break;
        case '←':
            if(display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
            case '=': 
            try{
                display.innerText = eval(display.innerText);
            }    
            catch {
                display.innerText = 'Error!';
            }
            break;
        default: */
     // display.innerText += e.target.innerText; 
       
    });
});


