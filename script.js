/* Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt(). 
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//TOOLS
/* - Casual numbers
- 2 array of numbers (1 for casual numbers and 1 for user numbers)
- function Timeout to make numbers disappear
- prompt let make user insert his numbers
- condition (if) to control if PCarray = UserArray */

let PCnumbers = []
let USERnumbers = []

for (let i = 0; i < 5; i++) {
	var PCnumb = Math.floor(Math.random() * 100);
	PCnumbers.push(PCnumb)
	console.log(PCnumbers)
	document.getElementById("numbList").innerHTML+= (PCnumb+" - ")
}

setTimeout(HideFunction, 3000)

function HideFunction() {
    document.getElementById("numbList").innerHTML= ""
    }




