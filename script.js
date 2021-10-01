// Latihan -> Programmer Zaman Now (Youtube)

// Tipe data Number
document.writeln('Tipe data Number');
document.writeln("</br>");
document.writeln(100);
document.writeln("</br>");
document.writeln(100.123); 
document.writeln("</br>");
document.writeln("</br>");

// Number Notation terdiri dari : binary, hexadecimal, octal.

// Tipe data Boolean terdapat 2 data yaitu, true | false.

document.writeln('Tipe data Boolean');
document.writeln("</br>");
// Example:
document.writeln('true'); 
document.writeln("</br>");
document.writeln('false');
document.writeln("</br>");
document.writeln("</br>");

// Tipe data string menggunakan tanda petik. petik 1 atau petik 2.
// Example:
document.writeln("Tipe data String");
document.writeln("</br>");
document.writeln("Nama : " + "Naim Shihab" + 21);
document.writeln("</br>");
document.writeln("</br>");

// Variabel adalah tempat untuk menyimpan data. 
// Variabel Let
// Example:
let fullName = "Naim Shihab";
let firstName = "Naim";
let lastName = "Shihab";

document.writeln(fullName);
document.writeln("</br>");
document.writeln(firstName);

// Variabel Const
// const application = "Belajar Javascript dasar";
// application = "Gak Mau Belajar"; //Erro karena value variabel const tidak bisa diubah.

// document.writeln(application);

// Operator Matematika !!!

// Operator Aritmatika
// Example :
// let result = 1 + 2;
// console.log("hasil dari 1 + 2 = " + result);
// let originalResult = result // 3

// result = result - 1;
// console.log("Hasil dari " + originalResult + " - 1 = " + result);
// originalResult = result // 2

// result = result * 5;
// console.log("Hasil dari " + originalResult + " x 5 = " + result);
// originalResult = result // 10

// lastAngka = result / 2;
// console.log("Hasil dari " + originalResult + " / 2 = " + lastAngka);
// originalResult = lastAngka // 5

// baru = lastAngka * 5;
// console.log("Hasil dari 5 x " + originalResult + " = " + baru);
// originalResult = baru // 25

// Operator Augmented Assignments
// Example :
let result = 1 + 2;
console.log("hasil dari 1 + 2 = " + result);
let originalResult = result // 3

result -= 1;
console.log("Hasil dari " + originalResult + " - 1 = " + result);
originalResult = result // 2

// Operator Logika
const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);

// String template
const kelas = "Software Engineering";
const kampus = "Universitas Dipa Makassar";
const name = "Naim Shihab";
const template = `Nama : ${name}, ${kelas}.`;

console.log(template);

// Expression di String Template
const areng = "Albion Voldigoad";
const hasil = 90;

const hasilAkhir = `Nama : ${areng}, Lulus dengan Hasil : ${hasil > 75}`;
console.log(hasilAkhir);

// Multiline String

let multilineString = `Nama : ${name}
Jurusan : ${kelas}
Usia : 18 tahun
Universitas Dipa Makassar
Nice too meet you guys.
`;

console.log(multilineString);

// Konversi String dan Number
const value1 = parseInt("1"); //Telah dilakukan Konversi
const value2 = 1;
const last = value1 + value2;
console.log(last);

// Example :
console.log(parseInt("1.1")); //Dikonversi ke bilangan bulat
console.log(parseFloat("1.1")); // Dikonversi ke bilangan pecahan
console.log(Number("1.1")); // Dikonversi ke bilangan bulat/pecahan

// Tipe data Array
// Example :
const addNames = "Voldigoad";
const names = ["Naim", "Shihab", "Albion", "Voldigoad", "Muharram"];

console.log(names[0], `${addNames} |`, `Kampus : ${kampus} dan Jurusan : ${kelas}.`);

// Tipe data object

// const person = {
//     nama : `${names[2]}`,
//     "Program Studi" : `${kelas}`,
//     Kampus : `${kampus}`
// };

// console.log(person);

const orang = {
    nama: "Naim Shihab",
    alamat: "BTN Sompu Raya Permai Blok B/16",
    umur: 18
};

console.log(`Nama Lengkap : ${orang.nama}`);
console.log(`Alamat Lengkap : ${orang.alamat}`);
console.log(`Usia : ${orang.umur} Tahun`);

// If Expression

// const examValue = 90;

// if(examValue > 80) {
//     console.log(`Congratulation ${names[0]}.`);
// } else {
//     console.log(`Try Again Next Year :)`);
// }

// Else If Expression

const examVlaue = 90;

if (examVlaue > 80) {
    console.log("I'm give your A");
} else if (examVlaue > 70) {
    console.log("I'm give your B");
} else if (examVlaue > 60) {
    console.log("I'm give your C");
} else {
    console.log("Try Again Next Year");
}

// Popup
// Alert and Prompt
// const namess = prompt("Siapa nama anda?");
// alert(`Hai ${namess}.`);
// const namess2 = prompt("What do you from?");
// alert(`Woaahh.. ${namess2} yah.. sangat mengagumkan.`);

// Confirm
// const masuk = confirm("Anda yakin mau masuk?");

// if ( masuk ) {
//     const ner = prompt("Siapa nama anda?");
//     alert(`Hai ${ner}.`);
//     const nerr = prompt("What do you from?");
//     alert(`Wooahh.. ${nerr} yahh.. Sangat mengagumkan.`);

// } else {
//     alert("Payah!");
// }

// Switch Expression

// const nilai = prompt("Masukkan Nama Anda Untuk Melihat Nilai!");

// switch (nilai) {
//     case "Naim":
//         console.log("Anda Lulus!");
//         break;
//     case "Alim":
//     case "Albion": 
//         console.log("Anda Bodoh!");
//         break;
//     case "Draig":
//         console.log("Anda Tidak Lulus!");
//         break;
//     default:
//         console.log("Pilihan Tidak ditemukan!");

// }

// Operator Typeof

let datap = "Naim";
let datapp = typeof datap;
console.log(datapp);

// Operator In

// const personn = {
//     pinko: "Naim",
//     pinces: "Albion"
// };

// if ("pinko" in personn) {
//     alert(`Hai ${personn.pinko}`);
// } else {
//     alert("Hello");
// }

// Ternary Operator
const nilaiii = 60;
const ucapan = nilaiii <= 70 ? "Selamat Anda Lulus!" : "Anda Tidak Lulus!";

console.log(ucapan);

// Nullish Coalescing Operator
let parameter;
let data = parameter ?? "Nilai Default";
console.log(data);

// optional Chaining
const  personnn = {};
let country = personnn?.address?.country;
console.log(country);

// Falsy and Truthy
// const datappp = ``;

// if (datappp) {
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// }

// For Loop

// for (let counter = 1; counter <= 10; counter++) {
//     console.log(`Berhasil ${counter}`);
// };

// While Loop

// let counterr = 1;
// while (counterr <= 10) {
//     console.log(`Perulangan ke ${counterr}`);
//     counterr++;
// };

// Do While Loop

// let par = 1;
// do {
//     console.log(`Perulangan ke ${par}`);
//     par++;
// } while (par <= 10);

// Break and Continue
// Break 

// let pampar = 1;
// while (true) {
//     console.log(`Perulangan Ke ${pampar}`);
//     pampar++;

//     if(pampar > 10) {
//         break;
//     }

// }

// Continue 

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(`Perulangan Ganjil ${i}`);
// }

// For In

// Jika ingin akses property teerhadap sebuah object maka menggunakan cara seperti ini :
// const persan = {
//     pasName: "Naim",
//     pusName: "ALbion",
//     pesName: "Shihab"
// };

// for (const property in persan) {
//     console.log(`${property} : ${persan[property]}`);
// }

// For Of

// const namas = ["Naim", "Shihab", "Albion"];
// for (const name of namas) {
//     console.log(name);
// }

// With Statement (Tidak Direkomendasikan)
// const farming = {
//     kan: "Naim",
//     kun: "Shihab",
//     ken: "Albion"
// };

// with (farming) {
//    console.log(kan);
//    console.log(kun);
//    console.log(ken);
// }

// Function

// function sayHelloWorld() {
//     console.log("Hello World");
// }
// sayHelloWorld(); // Boleh dipanggil berkali-kali

// Function Parameter

// Membuat Function dengan parameter
// function seyHai(fitName, latName) {
//     console.log(` Hai ${fitName} dan ${latName}`);
// }
// seyHai("Naim", "Albion");

// Function Return Value
// Example 1:
function samHai(areng1, areng2) {
    const say = `Hello ${areng1} dan ${areng2}`;
    return say;
}
const resl = samHai("Naim", "Albion");
console.log(resl);

// Example 2: // Boleh return berkali-kali dalam 1 function
function getFInalValue(value) {
    if(value > 90)  {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}

const finalValue = getFInalValue(81);
console.log(`${finalValue}`);

// Menghentikan Eksekusi dengan Return

function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }

    return false;
}

console.log(isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

// Optional Parameter

// function satHello(kuah, bakso, mie) {
//     console.log(kuah);
//     console.log(bakso);
//     console.log(mie);
// } 
// satHello("Naim");

// Default Parameter

// function register(name, gender = "UNKNOWN") {
//     console.log(name);
//     console.log(gender);
// }
// register("Naim", "MALE");
// register("Budi");
// register("Joko", undefined);

// Rest Parameter

function sum(neme, ...data) {
    let total = 0
    for (const item of data) {
        total += item;
    }
    console.log(`Total ${neme} is ${total}`);
}

sum(`Orance`, 2, 3, 4, 5, 6, 7, 8);
sum(`Apple`, 5, 5, 6, 7, 5, 6);
sum(`Banana`, 9, 5, 2, 3, 4);

// Spread Syntax
// Mengirim Array ke Rest parameter

const values = [10, 10, 10, 10, 10];
sum("Test", ...values);

// Function sebagai Value
// Function di Variabel

function numr(muta) {
    console.log(`Helo ${muta}`);
}

const bahu = numr; // Tidak perlu menggunakan kurung buka/tutup
bahu("ALbion The Handsome");


// Anonymous Function

let huyar = function (jum) {
    console.log(`Hello ${jum}`);
}

huyar("Naim Shihab!");

// Function dalam Function

// function outer() {
//     function inner() {
//         console.log("Inner");
//     }

//     inner();
//     inner();
// }

// outer();

// Scope

// Global Scope
let bounter = 0;

function hyu() {
    // Local Scope hyu
    bounter++;
}

hyu();
hyu();

console.log(bounter);

// Recursive Function

// Factorial Loop (Menggukanan Perulangan)

function factorial(veleu) {
    let ferut = 1;
    for (let i = 1; i <= veleu; i++) {
        ferut *= i;
    }
    return ferut;
}

console.log(factorial(5));

// Factorial Recursive (Menggukanan Recursive)

function factorialRecursive(guntur) {
    if (guntur === 1) {
        return 1;
    } else {
        return guntur * factorialRecursive(guntur - 1);
    }
}

console.log(factorialRecursive(5));

// Function Generator // SKIIPPPP

// Arrow Function

const goodHello = (kunn) => {
    const suy = `Hello Brother ${kunn}`;
    console.log(suy);
}

goodHello("Naim");

// Arrow Function Tanpa Block

const bung = (mana) => console.log(`Hum ${mana}`);

bung("Naim");

// Arrow Function Return Value

const suma = (tuyai, found) => tuyai + found;

console.log(suma(100, 100));

// Arrow Functon sebagai Parameter

function giveMeName(callback) {
    (callback("Naim"));
}

giveMeName((name) => console.log(`Hello ${name}`));

// Closure // SKIP

// Object Method

const person = {
    name: "Naim",
    suyHai: function (name) {
        console.log(`Hai ${name} yang tampan!`);
    }
};

person.suyHai("Naim");

// Kata Kunci This // pada object method

const apalah = {
    jjam: "Albion",
    hurama: function (mane) {
        console.log(`Hai ${mane} My Name Is ${this.jjam}`);
    }
}

apalah.hurama("Naim");

// Arrow Functon di Object 

const arrowFunctionInObject = {
    valuer: "Naim Shihab",
    kurama: (important) => {
        console.log(`Hello ${important}`);
    }
}

arrowFunctionInObject.kurama("Naim");

// Getter and Setter (Belum Cukup Populer dikalangan Programmer Javascript)

let serpon = {
    palangName: "Naim",
    pulungName: "Alim",
    get fulllName() {
        return `Good Morning ${this.palangName} dan ${this.pulungName}`;
    },
    
    set fulllName(value) {
        const turray = value.split(" ");
        this.palangName = turray[0];
        this.pulungName = turray[1];
    }
}

serpon.fulllName = ("ALbion Voldigoad");
console.table(serpon);

serpon.fulllName = ("Alim Muharram");
console.table(serpon);

serpon.fulllName = ("Ica");
console.table(serpon);

// Masalah Variabel Var











