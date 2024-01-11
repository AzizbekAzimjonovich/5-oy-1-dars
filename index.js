/***import { sum } from "./ab.js";
console.log(sum(10,20)); */

//1-misol
/**let a=[1,2,"salom",true,"xayr"];
let hisob=0;

function sonlar(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i]==='number') {
            hisob+=arr[i];
        }
        
    }
    return hisob;
}
console.log(sonlar(a));
 */

//2-misol
let a = "lorem ipsum";
function boshharf(text) {
    return text.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
console.log(boshharf(a));  // "Lorem Ipsum"


//3-misol
/**let matn='101'
 function palindrom(satr) {
    let tek;
    let arr=satr.split('');
    if (arr.reverse().join('')==satr) {
        tek='palindrom'
    }else{
        tek='palindrom emas'
    }
    return tek
 }

 console.log(palindrom(matn)); */

 //4-misol
 /**const user=[
    {
        id: 1,
        name:'Azizbek',
        age: 20
    },
    {
        id: 2,
        name: 'Abdurahmon',
        age: 19
    },
    {
        id: 3,
        name:'Muhammadjon',
        age: 16
    }
 ];
  */