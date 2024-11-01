// 5.Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.
// let array = [12,23,43,54,65,67,89,90,100];
// let max= array[0];
// let min=array[0];
// let minIndex =0;
// let maxIndex=0;

// for (let index = 0; index < array.length; index++) {
//     if(array[index]>max){
//         max=array[index];
//         maxIndex=index;
//     }
//     if(array[index]<min){
//         min=array[index];
//         minIndex=index;
//     }
// }
// console.log(maxIndex,max);
// console.log(minIndex,min);

// let temp = array[minIndex];
// array[minIndex]=array[maxIndex];
// array[maxIndex]=temp;

// console.log(array);

// ?6.Verilmiş arraydə təkrərlanan elementi tapin.
// let check;

// for (let i = 0; i < array.length; i++) {
//     check = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] === check) {
//             console.log(check);
//         }

//     }

// }

// 7.Verilmiş arraydə ən böyük və ən kiçik ədədin hasilini arrayin ədədi ortasi ilə müqasiyə edin.
// let array = [12,23,43,54,65,67,89,90,100,23];

// let maxEded = Math.max(...array);
// let minEded =Math.min(...array)
// let  multiply = maxEded*minEded;
// let sum =0;
// for (let i = 0; i < array.length; i++) {
//     sum+=array[i]
// };
// let avearage = sum/array.length;

// if(multiply>avearage){
//     console.log("Hasil boyukdur ededi ortadan ...");

// }else{

//     console.log("Hasil kicikdir ededi ortadan ...");
// }

// 7.
// Bu array-dəki insanların orta yaşını hesablayın.
// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];

// let sum =0;
// for (let i = 0; i < people.length; i++) {
//     sum+=people[i].age;
// }
// console.log(sum/people.length);

// 10. İki Array-də Eyni Elementlərin Tapılması
// let array1 = [1, 3, 5, 7 , 4];
// let array2 = [2, 3, 6, 7, 8 ,4];
// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i]==array2[j]) {
//             console.log(array1[i]);

//         }

//     }

// }

// 12.Verilmiş arraydə mənfi ədədlərin hasili ilə müsbət ədədlərin hasilini müqasiyə edin.

let array = [-10,10,-1 ];

let menfiHasil = 1;
let musbetHasil = 1;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    musbetHasil *= array[i];
  } else if (array[i] < 0) {
    menfiHasil *= array[i];
  }
}

// console.log("menfi hasil", menfiHasil);
// console.log("musbet hasil", musbetHasil);

// if(menfiHasil>musbetHasil){
//     console.log("Menfi ededlerin hasili boyukdur");
// }
// else if(menfiHasil<musbetHasil){
//     console.log("Musbet ededlerin hasili boyukdur");
// }
// else{
//     console.log("Hasiller beraberdir !!");
    
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }
  
// ? 13let array =[11,12,14,56] =>[56,14,12,11]
// ? 13.Verilmiş arrayi tərsinə çevirib yazin.

let array1 =[12,54,23,43,54];
let reserved=[];

for (let index = array1.length-1; index >=0;index--) {
    reserved.push(array1[index])
}
console.log(reserved);




