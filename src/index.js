import validator from './validator.js';

//Al click en el btn1 se debe mostrar la sección Payment y ocultar la sección Purchase
document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("purchase").className = "hide";
    document.getElementById("payment").className = "show";
    document.getElementById("confirmation").className = "hide";
});



const card = document.getElementById("card_number")
const button =  document.getElementById("btn2")





    button.addEventListener("click", function() {
        document.getElementById("purchase").className = "hide";
        document.getElementById("payment").className = "hide";
        document.getElementById("confirmation").className = "show";

        if (card.value === ''){
            document.getElementById("warning").innerHTML = "Debe ingresar el número de tarjeta";
            
        } else {
            let finalMaskify = validator.maskify(card.value)
            let finalValidation = validator.isValid(card.value)
            if (finalValidation == true) {
                document.getElementById("warning").innerHTML= "La tarjeta " + finalMaskify + " es VÁLIDA.<br> Recibirá un correo electrónico con su número de seguimiento."
            } else {
                document.getElementById("warning").innerHTML= "La tarjeta " + finalMaskify + " es INVÁLIDA. <br> Ingrese otra tarjeta."
            }

        }
    })

    


console.log(validator)


