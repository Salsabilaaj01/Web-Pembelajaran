document.writeln("Ini hello world di file JavaScript");
//perkenalan
document.writeln("</br>");
let fullname= "Salsabila Akmalina Jauhari";
let firstname= "Salsabila";
let middlename= "Akmalina";
let lastname= "Jauhari";


document.writeln("Nama lengkap : " + fullname);
document.writeln("</br>");
document.writeln("Nama pertama : " + firstname);
document.writeln("</br>");
document.writeln("Nama tengah : " + middlename);
document.writeln("</br>");
document.writeln("Nama akhir : " + lastname);

let counter =1;
for (; counter <= 10;) 
{document.writeln("<p>Perulangan ke " + counter + "</p>")
counter++;
}
//for (let counter =1; counter <=10; counter++}

function segitiga1(baris){
    let pola= ''; 
    for(let i=1; i<= baris; i++){
        for (let j = 1; j<=i; j++){
            pola+= '*';
        }
        pola += '</br>';
    } 
    return pola;
} 
document.writeln(segitiga1(5));


document.writeln("Hello World")

const angka1 =
document.getElementById("angka1");
const angka2 =
document.getElementById("angka2");
const operator =
document.getElementById("operator");
const hasil = document.getElementById("hasil");
const submit =
document.getElementById("submit");
submit.addEventListener('click', function () {
hasil.innerText = eval(angka1.value + operator.value + angka2.value);
//hasil.innerText = Number(angka1.value) + operator.value + Number(angka2.value);
//hasil.innerText = Number(angka1.value) - Number(angka2.value);
//hasil.innerText = Number(angka1.value) * Number(angka2.value);
//hasil.innerText = Number(angka1.value) / Number(angka2.value);
})


