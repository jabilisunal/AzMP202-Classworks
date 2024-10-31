// console.log("Hellow World");/
// ? Task -1
// 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
// Big number: 654
// Little number: 456 */

// let a=+prompt("eded daxil et");
// let b=+prompt("eded daxil et");
// let c=+prompt("eded daxil et");

// let maxEded;
// let minEded;
// if(a>b && a>c){
//     if(b>c){
//         maxEded =a*100+b*10+c;
//         minEded =c*100+b*10+a;
//     }else{
//         maxEded =a*100+c*10+b;
//         minEded=b*100+c*10+a;
//     }
// }
// else if(b>a && b>c){
//     if(a>c){
//         maxEded = b*100+a*10+c;
//         minEded=c*100+a*10+b;
//     }else{
//         maxEded =b*100+c*10+a;
//         minEded=a*100+c*10+b;
//     }
// }
// else if(c>a && c>b){
//     if(a>b){
//         maxEded= c*100+a*10+b;
//         minEded=b*100+a*10+c;
//     }else{
//         maxEded=c*100+b*10+a;
//         minEded=a*100+b*10+c;
//     }
// }

// console.log("min eded : " + minEded);
// console.log("max eded : " + maxEded);


// let number =456;

// let lastNumber = number%10;
// let secondNumber= (number%100-lastNumber)/10;
// let firstNumber = (number-number%100)/100;

// console.log(`${firstNumber} , ${secondNumber} , ${lastNumber}`);



// let month = prompt("Ayi daxil edin:")


// switch (month) {
//     case "Yanvar":
//     case "Mart":
//     case "May":
//     case "Iyul":
//     case "Avqust":
//     case "Oktyabr":
//     case "Dekabr":
//        alert("This month has 31 days")
//         break;
//     case "Aprel":
//     case "Iyun":
//     case "Sentyabr":
//     case "Noyabr":
//         alert("This month has 30 days");
//         break;
//     case "Fevral":
//         alert("This month has 28 days");
//         break;
//     default:
//         alert("It is not correct month !!!")
//         break;
// }

let emekhaqqi = prompt("emek haqqi: ");
let muddet = prompt("istediyiniz muddeti daxil edin: ");
let mebleg = prompt("istediyiniz meblegi daxil edin: ");
let faiz;
let ayliq;
let borc;
let max_kredit = emekhaqqi * 10;
let max_muddet = 36;
if (mebleg < max_kredit){
    if (muddet< max_muddet){
        if(muddet > 0 && muddet < 12){
            faiz = (mebleg * 13) / 100;
            borc = mebleg + faiz;
            ayliq = borc / muddet;
            if (ayliq > emekhaqqi*0.45){
                alert(`${mebleg} azn mebleg size 13%le ${muddet} ayda ayliq ${ayliq} azn ile verilir.`)
            }
            else{
                alert("ayliq emek haqqi azdir.")
            }
        }
        else if(muddet > 11 && muddet < 24){
            faiz = (mebleg * 15) / 100;
            borc = mebleg + faiz;
            ayliq = borc / muddet;
            if (ayliq > emekhaqqi*0.45){
                alert(`${mebleg} azn mebleg size 15%le ${muddet} ayda ayliq ${ayliq} azn ile verilir.`)
            }
            else{
                alert("ayliq emek haqqi azdir.")
            }
        }
        else if(muddet > 23 && muddet < 36){
    
            faiz = (mebleg * 17) / 100;
    
            borc = mebleg + faiz;
            ayliq = borc / muddet;
            if (ayliq > emekhaqqi*0.45){
                alert(`${mebleg} azn mebleg size 17%le ${muddet} ayda ayliq ${ayliq} azn ile verilir.`)
            }
            else{
                alert("ayliq emek haqqi azdir.")

            }
    
        }
    
    
    
        
    
    
    
    }
    else{
        alert("max muddeti kecir")
    }


}
else{
    alert("max muddeti kecir")
}
