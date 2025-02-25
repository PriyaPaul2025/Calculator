let string = "";
let display = document.querySelector('input[name="display"]'); 
let buttons=document.querySelectorAll('input[type="button"]');
buttons.forEach((button) => {
       button.addEventListener('click', (e) => {
        let value = e.target.value;
        if (value === "=") {
            try {
                string = eval(string) || "";
            } catch {
                string = "Error";
            }
        } 
        else if (value === "AC") {
            string = "";
        } 
        else if (value === "DE") {
            string = string.slice(0, -1); 
        } 
     
        else {
            string += value;
        }
        display.value = string;
    });
});