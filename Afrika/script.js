
let cavab = confirm('Morro AfrikaYardimXanaya Xoş geldiniz');

let manat1 = prompt ('Neçe manat bağışlıyırsınız ? Lazım olan mebleğ = 5600 manat');
let dollar1 = prompt ('Neçe dollar bağışlıyırsınız ? Lazım olan mebleğ = 3100 dollar');
let demir1 = prompt ('Neçe demir bağışlıyırsınız ? Lazım olan mebleğ = 4000 dəmir');
let qizil1 = prompt ('Nece qızıl bağışlıyırsınız ? Lazım olan mebleğ = 2300 qızıl');

let sp ;

 manat = 5600;
 dollar = 3100;
 demir = 4000;
 qizil = 2300;

 if (manat1 < manat & dollar1 < dollar & qizil1 < qizil & demir1 < demir) {
 sp = 'Yardımınız üçün təşəkkürlər ';
 } else {
 sp = 'elimzde yoxdur';
 }


 netice1 = manat1 - manat ;
 netice2 = dollar1 - dollar ;
 netice3 = qizil1 - qizil;
 netice4 = demir1 - demir;



document.getElementById("o").innerHTML = 
`
${sp} 
` ;
document.getElementById('h').innerHTML =
`Bağışladığınız manat qiymeti bu qederdir = ${manat1} manat   
 Bağışladığınız  dollar qiymeti bu qederdir = ${dollar1} dollar  
 Bağışladığınız demir qiymeti bu qederdir = ${demir1} demir  
 Bağışladığınız qizil qiymeti bu qederdir = ${qizil1} qızıl `;

document.getElementById('hi').innerHTML =
` Geriye qalan manat sayi bu qədərdir =  ${netice1} manat
 Geriye qalan dollar sayi bu qədərdir = ${netice2} dollar 
 Geriye qalan dəmir sayi bu qədərdir = ${netice3} dəmir
 Geriye qalan qızıl sayi bu qədərdir = ${netice4} qızıl`;

