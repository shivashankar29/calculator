let screen = document.querySelector("#result");
    function display(val) {
    screen.value+=val;
    }
    function equate() {
        let x = document.querySelector("#result").value;
        let y = eval(x);
        document.querySelector("#result").value = y;
    }
    function clr() {
        document.querySelector("#result").value = "";
    }
    document.addEventListener("keydown" , function (event) {
        if (event.key === "=" || event.keyCode === 13) {
            event.preventDefault();
            equate();
        }
        else if (event.key === "Enter") {
            equate();
        }
    }); 
    