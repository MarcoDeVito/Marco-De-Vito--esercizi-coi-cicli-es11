// Traccia 1
let num = 7;
for (let i = 1; i < 11; i++) {

    console.log(i * num);

}
// Traccia 2

let media = 0;
let contaDispari =0;
for (i = 1; i < 21; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
    else {
        media = media + i;
        contaDispari++;

    }

}
console.log(`La media dei numeri dispari è: ${media/contaDispari}`);

// Traccia 3
do{
sceltaBevanda= prompt("Buongiorno che bevanda desidera:\n (1) acqua\n (2) coca cola\n (3) birra")
switch (sceltaBevanda) {
    case "1":
        alert("E' stata selezionata l'acqua");
        break;
    case "2":
        alert("E' stata selezionata coca cola");
        break;
    case "3":
        alert("E' stata selezionata birra");
        break;

    default:
        sceltaBevanda="error"
        break;
}
}while(sceltaBevanda=="error")
