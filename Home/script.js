

function removeDuplicates() {
      
let array1 = Array("Matt Johnson","Bart Paden","Ryan Doss","Jared Malcolm");
let array2 = Array("Matt Johnson","Bart Paden","Jordan Heigle","Tyler Viles");
let concat = array1.concat(array2)

let set = new Set(concat)

let result = [...set]

console.log(result)
window.alert("Please Check Console Log")
  };
  
