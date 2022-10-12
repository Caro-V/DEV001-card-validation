const validator = {


  isValid (creditCardNumber) {

    //Traer el input a un array
    let cardArray = creditCardNumber.split("")
    let addDigits = 0
    let totalEven = 0
    let totalOdd = 0
    

    //Ciclo for para cada índice del arreglo según se encuentre en una posición par o impar
    for (let i = 0; i < cardArray.length; i++ ){      
      let numPosition = Number(cardArray[i])
      
      //Duplicar los números que están en las posiciones pares
      if (i % 2 === 0) {
        numPosition = cardArray[i]*2

            //Sumar los dígitos de los números mayores o iguales a diez
            if  (numPosition >= 10){
              addDigits = numPosition - 9
              totalEven += addDigits
              //console.log(addDigits + " suma de los mayores a diez")
            } else {totalEven += numPosition}   

      } 
      //Números en posiciones impares
      else { 
        numPosition = Number(cardArray[i])
        totalOdd += numPosition
        }
      }
        
      //Variable con la suma de los números en posicioes pares e impares
      let totalTotal = totalEven + totalOdd

      //Si el total dividido entre diez tiene residuo 0, indicar si es VÁLIDA o INVÁLIDA
      if (totalTotal % 10 === 0) {
      return true
      } else {
      return false 
      } 
    },

  maskify (creditCardNumber) {
      let cardArray = creditCardNumber.split("")
      let numbers = ""
    
    for (let i = 0; i < cardArray.length; i++)
      if (i >= cardArray.length-4 ){
        numbers += cardArray[i]
      } else {
        numbers += "#"        
      }
    return numbers;    
    }   
};


export default validator;


