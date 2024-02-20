
function setnumbers(arr) {
let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**2
    }
   return sum
}



let numbers =[2,4,5];

const duble = setnumbers(numbers);

console.log(duble);
