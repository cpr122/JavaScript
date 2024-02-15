
function ingresarDatos(){
    
    var arr = [5,11,3,7,20,1,8,4,6];

var n = arr.length;

for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
        // Intercambiar si el elemento actual es mayor que el siguiente elemento
        if (arr[j] > arr[j + 1]) {
            // Intercambio de elementos usando destructuring assignment
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

console.log("Arreglo ordenado:");
console.log(arr);
}