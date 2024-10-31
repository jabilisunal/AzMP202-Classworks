// console.log("Hellow World");

// for, while , do while, for in , for of

// for(startPoint, condition, steps)

// for (let index = 0; index < 10; index++) {
//   console.log("Hello world");
// }

// let sum =0;
// for (let index = 0; index <= 100; index++) {
// if(index%2==1){
//     sum+=index;
// }
// }
// console.log(sum);

// for(;;){
//     console.log("Hello Azmp202");
// }

// ? break
// let count = 0;
// for (;;) {
//     count++;
//     if(count===2000){
//         break;
//     }
//  console.log(count);
// }

// let number = 6;
// while (number<10 && number>5) {
//     number++;
//     console.log(number);
// }
//6
//7

// let a =10;
// console.log(a--);
// do {
//     console.log(number + "do while");
//     number++

// } while (number>10);
// let number =5;

// while(number>10){
//     console.log(number + " while");
//     number++;

// }

// let name = "Ibrahim Sultan";

// console.log(name[-1]);
// console.log(name[name.length-1]);
// console.log(name[name.length-1]);

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);

// }

// let text ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum laudantium voluptates quo quos assumenda officiis alias tempora suscipit cum omnis ipsum, eligendi dolor deserunt. Nihil suscipit modi tenetur quibusdam. zzz"

// let count =0;
// for (let i = 0; i < text.length; i++) {
//     if(text[i]==="z"){
//         count++;
//     }
// }
// console.log(count);

// let firstName = "Shola";

// for (let i = 0; i < firstName.length-2; i++) {
//     console.log(firstName[i]);
// }

// let students = [
//   "Ferid",
//   "Ibrahim",
//   "Aslan",
//   "Xadice",
//   "Zeyneb",
//   "Nihad",
//   "Shola",
// ];

// console.log(students[students.length-1]);

// console.log(students[0][0]);

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }
// let data = [19,false,NaN,"Salam",'a',undefined];

// tek ededleri goster
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==0){
//         console.log(array[i]);

//     }

// }
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==1){
//         console.log(array[i]);

//     }

// }
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==1 && array[i]%5==0){
//         console.log(array[i]);

//     }

// }

// let array = [10, 12, 15, 34, 47, 60, 54, 89, 90];

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     sum += array[i];
//   }
// }
// console.log(sum);

// let firstName = "Abdullah";

// for (let i = 0; i < firstName.length; i++) {
//     // if(firstName[i]==firstName[i+1]){
//     //     console.log(firstName[i]);

//     // }
//     console.log(firstName[i]);

// }

// ? 1-100 qeder cut ededleri gosterin.
// ? 1-100 qeder tek ededlerin sayin gosterin.
// ? 1-100 qeder 5e bolunen ededlerin cemini goster

let count = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    // count=count+1
    // count++
    count += 1;
  }
}
// console.log(count);
// let arr =[];
// let number =10;

// let arr =[12,14,35,56,68,93];
// let sum=0;
// for (let index = 0; index < arr.length; index++) {
//     sum+=arr[index];
// }
// console.log(sum);

// ! #arrayın tək index-də duran elementlərin tapın.

// for (let i = 0; i < arr.length; i++) {
//     if(i%2==1){
//         console.log(arr[i]);

//     }
// }

//? #arrayin daxilindəki  ən böyük   elementi return edən funksiya yazın.

// let largestNum=arr[0];
// let smallestNum=arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>largestNum){
//         largestNum=arr[i];
//     }
//     if(arr[i]<smallestNum){
//         smallestNum=arr[i]
//     }
    
// }
// let diffrence = largestNum-smallestNum
// // console.log(largestNum);
// // console.log(smallestNum);

// console.log(diffrence);

//? #verilmiş ədədin (example:25)array'in elementləri arasında olub olmadığını müəyyən edən proqram yazn

// let arr = [12, 14, 35, 56, 68, 93];
// let point =55;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==point){
//         console.log("bu eded var");
//         break;
//     }
// }
const employees = [
    { name: "Jamil", salary: 50000, department: "IT" },
    { name: "Jale", salary: 60000, department: "HR" },
    { name: "Bayram", salary: 55000, department: "IT" },
    { name: "Sahil", salary: 75000, department: "HR" },
    { name: "Maryam", salary: 65000, department: "IT" },
    { name: "Elnara", salary: 80000, department: "HR" },
    { name: "Davud", salary: 70000, department: "IT" },
    { name: "Sefer", salary: 10000, department: "IT" },
    { name: "Sefer", salary: 11000, department: "IT" },
  ];
console.log(employees.length);

//   for (let index = 0; index < employees.length; index++) {
//     if(employees[index].salary>60000){
//         console.log(employees[index].name);
        
//     }
//   }
// ? daxil olunmus ededin faktorialini tap !
// let eded = +prompt("ededi daxil edin")
// let faktorial = 1;
// for (let i = 1; i <= eded; i++) {
//     faktorial*= i;
    
// }
// alert(faktorial);

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium.";

let c = 0;
for (let i = 0; i < str.length; i++) {
      if(str[i].toLowerCase()==="l"){
        c++
      }
}
console.log("Count of l:",c);


const countries = ["azerbaijan", "norwey", "albania", "germany", "america"];

for (let i = 0; i < countries.length; i++) {
    if(countries[i][0]==="a" && countries[i][countries[i].length - 1] === "a"){
        console.log(countries[i]);
        
    }
    
}

let n = 427;


