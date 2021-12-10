let screen = document.getElementById("screen");

let display = (x) => {
    screen.value += x;
}

let clearScreen = () => {
    screen.value = "";
}

let calculate = () => {
    
   let x = screen.value != "" ? eval(screen.value): screen.value = "";
   screen.value = x;

   /**
    * if(screen.value != ""){
        let x = eval(screen.value);
        screen.value = x;
    }
    */

    

}

