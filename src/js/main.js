// Body
let body = document.body;
let script = document.querySelectorAll("script")[0];



let divGlobe = document.createElement("div");
divGlobe.setAttribute("id", "globe");
body.insertBefore(divGlobe, script);

// Titre
let monTitre = document.createElement("h1");
monTitre.textContent = "The Calculator";
monTitre.setAttribute("id" , "monH1");
body.insertBefore(monTitre, divGlobe);


// Partie Haute
let inputHaut = document.createElement("input");
inputHaut.setAttribute("id", "haut");
inputHaut.placeholder = 0;
divGlobe.appendChild(inputHaut);

// Contenu
let divBtn = document.createElement("div");
divBtn.setAttribute("id", "btn");
divGlobe.appendChild(divBtn);

let tabBut = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "-", "x", "/",  "C", "="];

tabBut.forEach(elem => {
    let button = document.createElement("button");
    button.textContent = elem;
    divBtn.appendChild(button);
});


let input1 = "";
let operateur = "";
let input2 = "";
let mesButtons = Array.from(document.querySelectorAll("button"));
let reCompt = 0;

// addEventListener
mesButtons.forEach(ele => {
    ele.addEventListener("click", (e) => {
        if (input1 != "" && input2 != "" && operateur != "" && e.target.textContent == "=") {
            inputHaut.value = "";

            switch (operateur) {
                case "+":
                    inputHaut.value = parseInt(input1) + parseInt(input2);
                    break;

                case "-":
                    inputHaut.value = parseInt(input1) - parseInt(input2);
                    break;

                case "x":
                    inputHaut.value = parseInt(input1) * parseInt(input2);
                    break;

                case "*":
                    inputHaut.value = parseInt(input1) * parseInt(input2);
                    break

                case "/":
                    inputHaut.value = parseInt(input1) / parseInt(input2);
                    break;

                default:
                    break;
            }

        }else if (e.target.textContent == "C") {

            input1 = "";
            operateur = "";
            input2 = "";
            inputHaut.value = "";
            reCompt = 0;

        }else if (input1 != "" && operateur != "" && (e.target.textContent != "+" && e.target.textContent != "-" && e.target.textContent != "x" && e.target.textContent != "*" && e.target.textContent != "/")) {

            while (reCompt < 1) {

                inputHaut.value = "";
                reCompt++;

            }

            inputHaut.value += e.target.textContent;
            input2 = inputHaut.value;

        }else if(input1 != "" && (e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "x" || e.key == "*" || e.target.textContent == "/")){

            inputHaut.value = "";
            inputHaut.value += e.target.textContent;
            operateur = inputHaut.value;

        }else{

            inputHaut.value += e.target.textContent;
            input1 = inputHaut.value;

        }
        
    });
});

window.addEventListener("keydown" , (e) => {

    if (input1 != "" && input2 != "" && operateur != "" && e.key == "=") {
        inputHaut.value = "";

        switch (operateur) {

            case "+":
                inputHaut.value = parseInt(input1) + parseInt(input2);
                break;

            case "-":
                inputHaut.value = parseInt(input1) - parseInt(input2);
                break;

            case "x":
                inputHaut.value = parseInt(input1) * parseInt(input2);
                break;

            case "*":
                inputHaut.value = parseInt(input1) * parseInt(input2);
                break;

            case "/":
                inputHaut.value = parseInt(input1) / parseInt(input2);
                break;

            default:
                break;

        }

    }else if (e.key == "c") {

        input1 = "";
        operateur = "";
        input2 = "";

        inputHaut.value = "";
        reCompt = 0;

    }else if (input1 != "" && operateur != "" && (e.key != "+" && e.key != "-" && e.key != "x" && e.key != "*" && e.key != "/")) {
        
        while (reCompt < 1) {

            inputHaut.value = "";
            reCompt++;

        }

        inputHaut.value += e.key;
        input2 = inputHaut.value;

    }else if (input1 != "" && (e.key == "+" || e.key == "-" || e.key == "x" || e.key == "*" || e.key == "/")) {

        inputHaut.value = "";
        inputHaut.value += e.key;
        operateur = inputHaut.value;

    }else{

        inputHaut.value += e.key;
        input1 = inputHaut.value;

    }
});
