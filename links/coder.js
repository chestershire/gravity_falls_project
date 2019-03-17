// gestion des espaces Vigenère
function gestionEspacesVigenere (phrase, mot) {
	// on allonge le mot pour qu'il fasse la taille de la phrase
	while (mot.length < phrase.length) {
		mot += mot;
	}
	
	// on transforme le mot en tableau
	var tabMot = Array.from(mot);
	
	// on ajoute les espaces et la ponctuation dans le mot
	for (var i = 0; i < phrase.length; i++) {
		if ((phrase[i] !== "A") && (phrase[i] !== "B") && (phrase[i] !== "C") && (phrase[i] !== "D") && (phrase[i] !== "E") && (phrase[i] !== "F") && (phrase[i] !== "G") && (phrase[i] !== "H") && (phrase[i] !== "I") && (phrase[i] !== "J") && (phrase[i] !== "K") && (phrase[i] !== "L") && (phrase[i] !== "M") && (phrase[i] !== "N") && (phrase[i] !== "O") && (phrase[i] !== "P") && (phrase[i] !== "Q") && (phrase[i] !== "R") && (phrase[i] !== "S") && (phrase[i] !== "T") && (phrase[i] !== "U") && (phrase[i] !== "V") && (phrase[i] !== "W") && (phrase[i] !== "X") && (phrase[i] !== "Y") && (phrase[i] !== "Z")) {
		
			tabMot.splice(i, 0, phrase[i]);

		} 
	}
	
	return tabMot;
}

// codage Vigenère
function coderVigenere(phrase, mot) {
	var phraseCodee = "";

	for (var i = 0; i < phrase.length; i++) {
		if (((phrase[i] === "A") && (mot[i] === "A")) || ((phrase[i] === "B") && (mot[i] === "Z")) || ((phrase[i] === "C") && (mot[i] === "Y")) || ((phrase[i] === "D") && (mot[i] === "X")) || ((phrase[i] === "E") && (mot[i] === "W")) || ((phrase[i] === "F") && (mot[i] === "V")) || ((phrase[i] === "G") && (mot[i] === "U")) || ((phrase[i] === "H") && (mot[i] === "T")) || ((phrase[i] === "I") && (mot[i] === "S")) || ((phrase[i] === "J") && (mot[i] === "R")) || ((phrase[i] === "K") && (mot[i] === "Q")) || ((phrase[i] === "L") && (mot[i] === "P")) || ((phrase[i] === "M") && (mot[i] === "O")) || ((phrase[i] === "N") && (mot[i] === "N")) || ((phrase[i] === "O") && (mot[i] === "M")) || ((phrase[i] === "P") && (mot[i] === "L")) || ((phrase[i] === "Q") && (mot[i] === "K")) || ((phrase[i] === "R") && (mot[i] === "J")) || ((phrase[i] === "S") && (mot[i] === "I")) || ((phrase[i] === "T") && (mot[i] === "H")) || ((phrase[i] === "U") && (mot[i] === "G")) || ((phrase[i] === "V") && (mot[i] === "F")) || ((phrase[i] === "W") && (mot[i] === "E")) || ((phrase[i] === "X") && (mot[i] === "D")) || ((phrase[i] === "Y") && (mot[i] === "C")) || ((phrase[i] === "Z") && (mot[i] === "B"))){

			phraseCodee += "A";

		} else if (((phrase[i] === "B") && (mot[i] === "A")) || ((phrase[i] === "C") && (mot[i] === "Z")) || ((phrase[i] === "D") && (mot[i] === "Y")) || ((phrase[i] === "E") && (mot[i] === "X")) || ((phrase[i] === "F") && (mot[i] === "W")) || ((phrase[i] === "G") && (mot[i] === "V")) || ((phrase[i] === "H") && (mot[i] === "U")) || ((phrase[i] === "I") && (mot[i] === "T")) || ((phrase[i] === "J") && (mot[i] === "S")) || ((phrase[i] === "K") && (mot[i] === "R")) || ((phrase[i] === "L") && (mot[i] === "Q")) || ((phrase[i] === "M") && (mot[i] === "P")) || ((phrase[i] === "N") && (mot[i] === "O")) || ((phrase[i] === "O") && (mot[i] === "N")) || ((phrase[i] === "P") && (mot[i] === "M")) || ((phrase[i] === "Q") && (mot[i] === "L")) || ((phrase[i] === "R") && (mot[i] === "K")) || ((phrase[i] === "S") && (mot[i] === "J")) || ((phrase[i] === "T") && (mot[i] === "I")) || ((phrase[i] === "U") && (mot[i] === "H")) || ((phrase[i] === "V") && (mot[i] === "G")) || ((phrase[i] === "W") && (mot[i] === "F")) || ((phrase[i] === "X") && (mot[i] === "E")) || ((phrase[i] === "Y") && (mot[i] === "D")) || ((phrase[i] === "Z") && (mot[i] === "C")) || ((phrase[i] === "A") && (mot[i] === "B"))) {

			phraseCodee += "B";

		} else if (((phrase[i] === "C") && (mot[i] === "A")) || ((phrase[i] === "D") && (mot[i] === "Z")) || ((phrase[i] === "E") && (mot[i] === "Y")) || ((phrase[i] === "F") && (mot[i] === "X")) || ((phrase[i] === "G") && (mot[i] === "W")) || ((phrase[i] === "H") && (mot[i] === "V")) || ((phrase[i] === "I") && (mot[i] === "U")) || ((phrase[i] === "J") && (mot[i] === "T")) || ((phrase[i] === "K") && (mot[i] === "S")) || ((phrase[i] === "L") && (mot[i] === "R")) || ((phrase[i] === "M") && (mot[i] === "Q")) || ((phrase[i] === "N") && (mot[i] === "P")) || ((phrase[i] === "O") && (mot[i] === "O")) || ((phrase[i] === "P") && (mot[i] === "N")) || ((phrase[i] === "Q") && (mot[i] === "M")) || ((phrase[i] === "R") && (mot[i] === "L")) || ((phrase[i] === "S") && (mot[i] === "K")) || ((phrase[i] === "T") && (mot[i] === "J")) || ((phrase[i] === "U") && (mot[i] === "I")) || ((phrase[i] === "V") && (mot[i] === "H")) || ((phrase[i] === "W") && (mot[i] === "G")) || ((phrase[i] === "X") && (mot[i] === "F")) || ((phrase[i] === "Y") && (mot[i] === "E")) || ((phrase[i] === "Z") && (mot[i] === "D")) || ((phrase[i] === "A") && (mot[i] === "C")) || ((phrase[i] === "B") && (mot[i] === "B"))) {

			phraseCodee += "C";

		} else if (((phrase[i] === "D") && (mot[i] === "A")) || ((phrase[i] === "E") && (mot[i] === "Z")) || ((phrase[i] === "F") && (mot[i] === "Y")) || ((phrase[i] === "G") && (mot[i] === "X")) || ((phrase[i] === "H") && (mot[i] === "W")) || ((phrase[i] === "I") && (mot[i] === "V")) || ((phrase[i] === "J") && (mot[i] === "U")) || ((phrase[i] === "K") && (mot[i] === "T")) || ((phrase[i] === "L") && (mot[i] === "S")) || ((phrase[i] === "M") && (mot[i] === "R")) || ((phrase[i] === "N") && (mot[i] === "Q")) || ((phrase[i] === "O") && (mot[i] === "P")) || ((phrase[i] === "P") && (mot[i] === "O")) || ((phrase[i] === "Q") && (mot[i] === "N")) || ((phrase[i] === "R") && (mot[i] === "M")) || ((phrase[i] === "S") && (mot[i] === "L")) || ((phrase[i] === "T") && (mot[i] === "K")) || ((phrase[i] === "U") && (mot[i] === "J")) || ((phrase[i] === "V") && (mot[i] === "I")) || ((phrase[i] === "W") && (mot[i] === "H")) || ((phrase[i] === "X") && (mot[i] === "G")) || ((phrase[i] === "Y") && (mot[i] === "F")) || ((phrase[i] === "Z") && (mot[i] === "E")) || ((phrase[i] === "A") && (mot[i] === "D")) || ((phrase[i] === "B") && (mot[i] === "C")) || ((phrase[i] === "C") && (mot[i] === "B"))) {

			phraseCodee += "D";

		} else if (((phrase[i] === "E") && (mot[i] === "A")) || ((phrase[i] === "F") && (mot[i] === "Z")) || ((phrase[i] === "G") && (mot[i] === "Y")) || ((phrase[i] === "H") && (mot[i] === "X")) || ((phrase[i] === "I") && (mot[i] === "W")) || ((phrase[i] === "J") && (mot[i] === "V")) || ((phrase[i] === "K") && (mot[i] === "U")) || ((phrase[i] === "L") && (mot[i] === "T")) || ((phrase[i] === "M") && (mot[i] === "S")) || ((phrase[i] === "N") && (mot[i] === "R")) || ((phrase[i] === "O") && (mot[i] === "Q")) || ((phrase[i] === "P") && (mot[i] === "P")) || ((phrase[i] === "Q") && (mot[i] === "O")) || ((phrase[i] === "R") && (mot[i] === "N")) || ((phrase[i] === "S") && (mot[i] === "M")) || ((phrase[i] === "T") && (mot[i] === "L")) || ((phrase[i] === "U") && (mot[i] === "K")) || ((phrase[i] === "V") && (mot[i] === "J")) || ((phrase[i] === "W") && (mot[i] === "I")) || ((phrase[i] === "X") && (mot[i] === "H")) || ((phrase[i] === "Y") && (mot[i] === "G")) || ((phrase[i] === "Z") && (mot[i] === "F")) || ((phrase[i] === "A") && (mot[i] === "E")) || ((phrase[i] === "B") && (mot[i] === "D")) || ((phrase[i] === "C") && (mot[i] === "C")) || ((phrase[i] === "D") && (mot[i] === "B"))) {

			phraseCodee += "E";

		} else if (((phrase[i] === "F") && (mot[i] === "A")) || ((phrase[i] === "G") && (mot[i] === "Z")) || ((phrase[i] === "H") && (mot[i] === "Y")) || ((phrase[i] === "I") && (mot[i] === "X")) || ((phrase[i] === "J") && (mot[i] === "W")) || ((phrase[i] === "K") && (mot[i] === "V")) || ((phrase[i] === "L") && (mot[i] === "U")) || ((phrase[i] === "M") && (mot[i] === "T")) || ((phrase[i] === "N") && (mot[i] === "S")) || ((phrase[i] === "O") && (mot[i] === "R")) || ((phrase[i] === "P") && (mot[i] === "Q")) || ((phrase[i] === "Q") && (mot[i] === "P")) || ((phrase[i] === "R") && (mot[i] === "O")) || ((phrase[i] === "S") && (mot[i] === "N")) || ((phrase[i] === "T") && (mot[i] === "M")) || ((phrase[i] === "U") && (mot[i] === "L")) || ((phrase[i] === "V") && (mot[i] === "K")) || ((phrase[i] === "W") && (mot[i] === "J")) || ((phrase[i] === "X") && (mot[i] === "I")) || ((phrase[i] === "Y") && (mot[i] === "H")) || ((phrase[i] === "Z") && (mot[i] === "G")) || ((phrase[i] === "A") && (mot[i] === "F")) || ((phrase[i] === "B") && (mot[i] === "E")) || ((phrase[i] === "C") && (mot[i] === "D")) || ((phrase[i] === "D") && (mot[i] === "C")) || ((phrase[i] === "E") && (mot[i] === "B"))) {

			phraseCodee += "F";

		} else if (((phrase[i] === "G") && (mot[i] === "A")) || ((phrase[i] === "H") && (mot[i] === "Z")) || ((phrase[i] === "I") && (mot[i] === "Y")) || ((phrase[i] === "J") && (mot[i] === "X")) || ((phrase[i] === "K") && (mot[i] === "W")) || ((phrase[i] === "L") && (mot[i] === "V")) || ((phrase[i] === "M") && (mot[i] === "U")) || ((phrase[i] === "N") && (mot[i] === "T")) || ((phrase[i] === "O") && (mot[i] === "S")) || ((phrase[i] === "P") && (mot[i] === "R")) || ((phrase[i] === "Q") && (mot[i] === "Q")) || ((phrase[i] === "R") && (mot[i] === "P")) || ((phrase[i] === "S") && (mot[i] === "O")) || ((phrase[i] === "T") && (mot[i] === "N")) || ((phrase[i] === "U") && (mot[i] === "M")) || ((phrase[i] === "V") && (mot[i] === "L")) || ((phrase[i] === "W") && (mot[i] === "K")) || ((phrase[i] === "X") && (mot[i] === "J")) || ((phrase[i] === "Y") && (mot[i] === "I")) || ((phrase[i] === "Z") && (mot[i] === "H")) || ((phrase[i] === "A") && (mot[i] === "G")) || ((phrase[i] === "B") && (mot[i] === "F")) || ((phrase[i] === "C") && (mot[i] === "E")) || ((phrase[i] === "D") && (mot[i] === "D")) || ((phrase[i] === "E") && (mot[i] === "C")) || ((phrase[i] === "F") && (mot[i] === "B"))) {

			phraseCodee += "G";

		} else if (((phrase[i] === "H") && (mot[i] === "A")) || ((phrase[i] === "I") && (mot[i] === "Z")) || ((phrase[i] === "J") && (mot[i] === "Y")) || ((phrase[i] === "K") && (mot[i] === "X")) || ((phrase[i] === "L") && (mot[i] === "W")) || ((phrase[i] === "M") && (mot[i] === "V")) || ((phrase[i] === "N") && (mot[i] === "U")) || ((phrase[i] === "O") && (mot[i] === "T")) || ((phrase[i] === "P") && (mot[i] === "S")) || ((phrase[i] === "Q") && (mot[i] === "R")) || ((phrase[i] === "R") && (mot[i] === "Q")) || ((phrase[i] === "S") && (mot[i] === "P")) || ((phrase[i] === "T") && (mot[i] === "O")) || ((phrase[i] === "U") && (mot[i] === "N")) || ((phrase[i] === "V") && (mot[i] === "M")) || ((phrase[i] === "W") && (mot[i] === "L")) || ((phrase[i] === "X") && (mot[i] === "K")) || ((phrase[i] === "Y") && (mot[i] === "J")) || ((phrase[i] === "Z") && (mot[i] === "I")) || ((phrase[i] === "A") && (mot[i] === "H")) || ((phrase[i] === "B") && (mot[i] === "G")) || ((phrase[i] === "C") && (mot[i] === "F")) || ((phrase[i] === "D") && (mot[i] === "E")) || ((phrase[i] === "E") && (mot[i] === "D")) || ((phrase[i] === "F") && (mot[i] === "C")) || ((phrase[i] === "G") && (mot[i] === "B"))) {

			phraseCodee += "H";

		} else if (((phrase[i] === "I") && (mot[i] === "A")) || ((phrase[i] === "J") && (mot[i] === "Z")) || ((phrase[i] === "K") && (mot[i] === "Y")) || ((phrase[i] === "L") && (mot[i] === "X")) || ((phrase[i] === "M") && (mot[i] === "W")) || ((phrase[i] === "N") && (mot[i] === "V")) || ((phrase[i] === "O") && (mot[i] === "U")) || ((phrase[i] === "P") && (mot[i] === "T")) || ((phrase[i] === "Q") && (mot[i] === "S")) || ((phrase[i] === "R") && (mot[i] === "R")) || ((phrase[i] === "S") && (mot[i] === "Q")) || ((phrase[i] === "T") && (mot[i] === "P")) || ((phrase[i] === "U") && (mot[i] === "O")) || ((phrase[i] === "V") && (mot[i] === "N")) || ((phrase[i] === "W") && (mot[i] === "M")) || ((phrase[i] === "X") && (mot[i] === "L")) || ((phrase[i] === "Y") && (mot[i] === "K")) || ((phrase[i] === "Z") && (mot[i] === "J")) || ((phrase[i] === "A") && (mot[i] === "I")) || ((phrase[i] === "B") && (mot[i] === "H")) || ((phrase[i] === "C") && (mot[i] === "G")) || ((phrase[i] === "D") && (mot[i] === "F")) || ((phrase[i] === "E") && (mot[i] === "E")) || ((phrase[i] === "F") && (mot[i] === "D")) || ((phrase[i] === "G") && (mot[i] === "C")) || ((phrase[i] === "H") && (mot[i] === "B"))) {

			phraseCodee += "I";

		} else if (((phrase[i] === "J") && (mot[i] === "A")) || ((phrase[i] === "K") && (mot[i] === "Z")) || ((phrase[i] === "L") && (mot[i] === "Y")) || ((phrase[i] === "M") && (mot[i] === "X")) || ((phrase[i] === "N") && (mot[i] === "W")) || ((phrase[i] === "O") && (mot[i] === "V")) || ((phrase[i] === "P") && (mot[i] === "U")) || ((phrase[i] === "Q") && (mot[i] === "T")) || ((phrase[i] === "R") && (mot[i] === "S")) || ((phrase[i] === "S") && (mot[i] === "R")) || ((phrase[i] === "T") && (mot[i] === "Q")) || ((phrase[i] === "U") && (mot[i] === "P")) || ((phrase[i] === "V") && (mot[i] === "O")) || ((phrase[i] === "W") && (mot[i] === "N")) || ((phrase[i] === "X") && (mot[i] === "M")) || ((phrase[i] === "Y") && (mot[i] === "L")) || ((phrase[i] === "Z") && (mot[i] === "K")) || ((phrase[i] === "A") && (mot[i] === "J")) || ((phrase[i] === "B") && (mot[i] === "I")) || ((phrase[i] === "C") && (mot[i] === "H")) || ((phrase[i] === "D") && (mot[i] === "G")) || ((phrase[i] === "E") && (mot[i] === "F")) || ((phrase[i] === "F") && (mot[i] === "E")) || ((phrase[i] === "G") && (mot[i] === "D")) || ((phrase[i] === "H") && (mot[i] === "C")) || ((phrase[i] === "I") && (mot[i] === "B"))) {

			phraseCodee += "J";

		} else if (((phrase[i] === "K") && (mot[i] === "A")) || ((phrase[i] === "L") && (mot[i] === "Z")) || ((phrase[i] === "M") && (mot[i] === "Y")) || ((phrase[i] === "N") && (mot[i] === "X")) || ((phrase[i] === "O") && (mot[i] === "W")) || ((phrase[i] === "P") && (mot[i] === "V")) || ((phrase[i] === "Q") && (mot[i] === "U")) || ((phrase[i] === "R") && (mot[i] === "T")) || ((phrase[i] === "S") && (mot[i] === "S")) || ((phrase[i] === "T") && (mot[i] === "R")) || ((phrase[i] === "U") && (mot[i] === "Q")) || ((phrase[i] === "V") && (mot[i] === "P")) || ((phrase[i] === "W") && (mot[i] === "O")) || ((phrase[i] === "X") && (mot[i] === "N")) || ((phrase[i] === "Y") && (mot[i] === "M")) || ((phrase[i] === "Z") && (mot[i] === "L")) || ((phrase[i] === "A") && (mot[i] === "K")) || ((phrase[i] === "B") && (mot[i] === "J")) || ((phrase[i] === "C") && (mot[i] === "I")) || ((phrase[i] === "D") && (mot[i] === "H")) || ((phrase[i] === "E") && (mot[i] === "G")) || ((phrase[i] === "F") && (mot[i] === "F")) || ((phrase[i] === "G") && (mot[i] === "E")) || ((phrase[i] === "H") && (mot[i] === "D")) || ((phrase[i] === "I") && (mot[i] === "C")) || ((phrase[i] === "J") && (mot[i] === "B"))) {

			phraseCodee += "K";

		} else if (((phrase[i] === "L") && (mot[i] === "A")) || ((phrase[i] === "M") && (mot[i] === "Z")) || ((phrase[i] === "N") && (mot[i] === "Y")) || ((phrase[i] === "O") && (mot[i] === "X")) || ((phrase[i] === "P") && (mot[i] === "W")) || ((phrase[i] === "Q") && (mot[i] === "V")) || ((phrase[i] === "R") && (mot[i] === "U")) || ((phrase[i] === "S") && (mot[i] === "T")) || ((phrase[i] === "T") && (mot[i] === "S")) || ((phrase[i] === "U") && (mot[i] === "R")) || ((phrase[i] === "V") && (mot[i] === "Q")) || ((phrase[i] === "W") && (mot[i] === "P")) || ((phrase[i] === "X") && (mot[i] === "O")) || ((phrase[i] === "Y") && (mot[i] === "N")) || ((phrase[i] === "Z") && (mot[i] === "M")) || ((phrase[i] === "A") && (mot[i] === "L")) || ((phrase[i] === "B") && (mot[i] === "K")) || ((phrase[i] === "C") && (mot[i] === "J")) || ((phrase[i] === "D") && (mot[i] === "I")) || ((phrase[i] === "E") && (mot[i] === "H")) || ((phrase[i] === "F") && (mot[i] === "G")) || ((phrase[i] === "G") && (mot[i] === "F")) || ((phrase[i] === "H") && (mot[i] === "E")) || ((phrase[i] === "I") && (mot[i] === "D")) || ((phrase[i] === "J") && (mot[i] === "C")) || ((phrase[i] === "K") && (mot[i] === "B"))) {

			phraseCodee += "L";

		} else if (((phrase[i] === "M") && (mot[i] === "A")) || ((phrase[i] === "N") && (mot[i] === "Z")) || ((phrase[i] === "O") && (mot[i] === "Y")) || ((phrase[i] === "P") && (mot[i] === "X")) || ((phrase[i] === "Q") && (mot[i] === "W")) || ((phrase[i] === "R") && (mot[i] === "V")) || ((phrase[i] === "S") && (mot[i] === "U")) || ((phrase[i] === "T") && (mot[i] === "T")) || ((phrase[i] === "U") && (mot[i] === "S")) || ((phrase[i] === "V") && (mot[i] === "R")) || ((phrase[i] === "W") && (mot[i] === "Q")) || ((phrase[i] === "X") && (mot[i] === "P")) || ((phrase[i] === "Y") && (mot[i] === "O")) || ((phrase[i] === "Z") && (mot[i] === "N")) || ((phrase[i] === "A") && (mot[i] === "M")) || ((phrase[i] === "B") && (mot[i] === "L")) || ((phrase[i] === "C") && (mot[i] === "K")) || ((phrase[i] === "D") && (mot[i] === "J")) || ((phrase[i] === "E") && (mot[i] === "I")) || ((phrase[i] === "F") && (mot[i] === "H")) || ((phrase[i] === "G") && (mot[i] === "G")) || ((phrase[i] === "H") && (mot[i] === "F")) || ((phrase[i] === "I") && (mot[i] === "E")) || ((phrase[i] === "J") && (mot[i] === "D")) || ((phrase[i] === "K") && (mot[i] === "C")) || ((phrase[i] === "L") && (mot[i] === "B"))) {

			phraseCodee += "M";

		} else if (((phrase[i] === "N") && (mot[i] === "A")) || ((phrase[i] === "O") && (mot[i] === "Z")) || ((phrase[i] === "P") && (mot[i] === "Y")) || ((phrase[i] === "Q") && (mot[i] === "X")) || ((phrase[i] === "R") && (mot[i] === "W")) || ((phrase[i] === "S") && (mot[i] === "V")) || ((phrase[i] === "T") && (mot[i] === "U")) || ((phrase[i] === "U") && (mot[i] === "T")) || ((phrase[i] === "V") && (mot[i] === "S")) || ((phrase[i] === "W") && (mot[i] === "R")) || ((phrase[i] === "X") && (mot[i] === "Q")) || ((phrase[i] === "Y") && (mot[i] === "P")) || ((phrase[i] === "Z") && (mot[i] === "O")) || ((phrase[i] === "A") && (mot[i] === "N")) || ((phrase[i] === "B") && (mot[i] === "M")) || ((phrase[i] === "C") && (mot[i] === "L")) || ((phrase[i] === "D") && (mot[i] === "K")) || ((phrase[i] === "E") && (mot[i] === "J")) || ((phrase[i] === "F") && (mot[i] === "I")) || ((phrase[i] === "G") && (mot[i] === "H")) || ((phrase[i] === "H") && (mot[i] === "G")) || ((phrase[i] === "I") && (mot[i] === "F")) || ((phrase[i] === "J") && (mot[i] === "E")) || ((phrase[i] === "K") && (mot[i] === "D")) || ((phrase[i] === "L") && (mot[i] === "C")) || ((phrase[i] === "M") && (mot[i] === "B"))) {

			phraseCodee += "N";

		} else if (((phrase[i] === "O") && (mot[i] === "A")) || ((phrase[i] === "P") && (mot[i] === "Z")) || ((phrase[i] === "Q") && (mot[i] === "Y")) || ((phrase[i] === "R") && (mot[i] === "X")) || ((phrase[i] === "S") && (mot[i] === "W")) || ((phrase[i] === "T") && (mot[i] === "V")) || ((phrase[i] === "U") && (mot[i] === "U")) || ((phrase[i] === "V") && (mot[i] === "T")) || ((phrase[i] === "W") && (mot[i] === "S")) || ((phrase[i] === "X") && (mot[i] === "R")) || ((phrase[i] === "Y") && (mot[i] === "Q")) || ((phrase[i] === "Z") && (mot[i] === "P")) || ((phrase[i] === "A") && (mot[i] === "O")) || ((phrase[i] === "B") && (mot[i] === "N")) || ((phrase[i] === "C") && (mot[i] === "M")) || ((phrase[i] === "D") && (mot[i] === "L")) || ((phrase[i] === "E") && (mot[i] === "K")) || ((phrase[i] === "F") && (mot[i] === "J")) || ((phrase[i] === "G") && (mot[i] === "I")) || ((phrase[i] === "H") && (mot[i] === "H")) || ((phrase[i] === "I") && (mot[i] === "G")) || ((phrase[i] === "J") && (mot[i] === "F")) || ((phrase[i] === "K") && (mot[i] === "E")) || ((phrase[i] === "L") && (mot[i] === "D")) || ((phrase[i] === "M") && (mot[i] === "C")) || ((phrase[i] === "N") && (mot[i] === "B"))) {

			phraseCodee += "O";

		} else if (((phrase[i] === "P") && (mot[i] === "A")) || ((phrase[i] === "Q") && (mot[i] === "Z")) || ((phrase[i] === "R") && (mot[i] === "Y")) || ((phrase[i] === "S") && (mot[i] === "X")) || ((phrase[i] === "T") && (mot[i] === "W")) || ((phrase[i] === "U") && (mot[i] === "V")) || ((phrase[i] === "V") && (mot[i] === "U")) || ((phrase[i] === "W") && (mot[i] === "T")) || ((phrase[i] === "X") && (mot[i] === "S")) || ((phrase[i] === "Y") && (mot[i] === "R")) || ((phrase[i] === "Z") && (mot[i] === "Q")) || ((phrase[i] === "A") && (mot[i] === "P")) || ((phrase[i] === "B") && (mot[i] === "O")) || ((phrase[i] === "C") && (mot[i] === "N")) || ((phrase[i] === "D") && (mot[i] === "M")) || ((phrase[i] === "E") && (mot[i] === "L")) || ((phrase[i] === "F") && (mot[i] === "K")) || ((phrase[i] === "G") && (mot[i] === "J")) || ((phrase[i] === "H") && (mot[i] === "I")) || ((phrase[i] === "I") && (mot[i] === "H")) || ((phrase[i] === "J") && (mot[i] === "G")) || ((phrase[i] === "K") && (mot[i] === "F")) || ((phrase[i] === "L") && (mot[i] === "E")) || ((phrase[i] === "M") && (mot[i] === "D")) || ((phrase[i] === "N") && (mot[i] === "C")) || ((phrase[i] === "O") && (mot[i] === "B"))) {

			phraseCodee += "P";

		} else if (((phrase[i] === "Q") && (mot[i] === "A")) || ((phrase[i] === "R") && (mot[i] === "Z")) || ((phrase[i] === "S") && (mot[i] === "Y")) || ((phrase[i] === "T") && (mot[i] === "X")) || ((phrase[i] === "U") && (mot[i] === "W")) || ((phrase[i] === "V") && (mot[i] === "V")) || ((phrase[i] === "W") && (mot[i] === "U")) || ((phrase[i] === "X") && (mot[i] === "T")) || ((phrase[i] === "Y") && (mot[i] === "S")) || ((phrase[i] === "Z") && (mot[i] === "R")) || ((phrase[i] === "A") && (mot[i] === "Q")) || ((phrase[i] === "B") && (mot[i] === "P")) || ((phrase[i] === "C") && (mot[i] === "O")) || ((phrase[i] === "D") && (mot[i] === "N")) || ((phrase[i] === "E") && (mot[i] === "M")) || ((phrase[i] === "F") && (mot[i] === "L")) || ((phrase[i] === "G") && (mot[i] === "K")) || ((phrase[i] === "H") && (mot[i] === "J")) || ((phrase[i] === "I") && (mot[i] === "I")) || ((phrase[i] === "J") && (mot[i] === "H")) || ((phrase[i] === "K") && (mot[i] === "G")) || ((phrase[i] === "K") && (mot[i] === "F")) || ((phrase[i] === "M") && (mot[i] === "E")) || ((phrase[i] === "N") && (mot[i] === "D")) || ((phrase[i] === "O") && (mot[i] === "C")) || ((phrase[i] === "P") && (mot[i] === "B"))) {

			phraseCodee += "Q";

		} else if (((phrase[i] === "R") && (mot[i] === "A")) || ((phrase[i] === "S") && (mot[i] === "Z")) || ((phrase[i] === "T") && (mot[i] === "Y")) || ((phrase[i] === "U") && (mot[i] === "X")) || ((phrase[i] === "V") && (mot[i] === "W")) || ((phrase[i] === "W") && (mot[i] === "V")) || ((phrase[i] === "X") && (mot[i] === "U")) || ((phrase[i] === "Y") && (mot[i] === "T")) || ((phrase[i] === "Z") && (mot[i] === "S")) || ((phrase[i] === "A") && (mot[i] === "R")) || ((phrase[i] === "B") && (mot[i] === "Q")) || ((phrase[i] === "C") && (mot[i] === "P")) || ((phrase[i] === "D") && (mot[i] === "O")) || ((phrase[i] === "E") && (mot[i] === "N")) || ((phrase[i] === "F") && (mot[i] === "M")) || ((phrase[i] === "G") && (mot[i] === "L")) || ((phrase[i] === "H") && (mot[i] === "K")) || ((phrase[i] === "I") && (mot[i] === "J")) || ((phrase[i] === "J") && (mot[i] === "I")) || ((phrase[i] === "K") && (mot[i] === "H")) || ((phrase[i] === "L") && (mot[i] === "G")) || ((phrase[i] === "M") && (mot[i] === "F")) || ((phrase[i] === "N") && (mot[i] === "E")) || ((phrase[i] === "O") && (mot[i] === "D")) || ((phrase[i] === "P") && (mot[i] === "C")) || ((phrase[i] === "Q") && (mot[i] === "B"))) {

			phraseCodee += "R";

		} else if (((phrase[i] === "S") && (mot[i] === "A")) || ((phrase[i] === "T") && (mot[i] === "Z")) || ((phrase[i] === "U") && (mot[i] === "Y")) || ((phrase[i] === "V") && (mot[i] === "X")) || ((phrase[i] === "W") && (mot[i] === "W")) || ((phrase[i] === "X") && (mot[i] === "V")) || ((phrase[i] === "Y") && (mot[i] === "U")) || ((phrase[i] === "Z") && (mot[i] === "T")) || ((phrase[i] === "A") && (mot[i] === "S")) || ((phrase[i] === "B") && (mot[i] === "R")) || ((phrase[i] === "C") && (mot[i] === "Q")) || ((phrase[i] === "D") && (mot[i] === "P")) || ((phrase[i] === "E") && (mot[i] === "O")) || ((phrase[i] === "F") && (mot[i] === "N")) || ((phrase[i] === "G") && (mot[i] === "M")) || ((phrase[i] === "H") && (mot[i] === "L")) || ((phrase[i] === "I") && (mot[i] === "K")) || ((phrase[i] === "J") && (mot[i] === "J")) || ((phrase[i] === "K") && (mot[i] === "I")) || ((phrase[i] === "L") && (mot[i] === "H")) || ((phrase[i] === "M") && (mot[i] === "G")) || ((phrase[i] === "N") && (mot[i] === "F")) || ((phrase[i] === "O") && (mot[i] === "E")) || ((phrase[i] === "P") && (mot[i] === "D")) || ((phrase[i] === "Q") && (mot[i] === "C")) || ((phrase[i] === "R") && (mot[i] === "B"))) {

			phraseCodee += "S";

		} else if (((phrase[i] === "T") && (mot[i] === "A")) || ((phrase[i] === "U") && (mot[i] === "Z")) || ((phrase[i] === "V") && (mot[i] === "Y")) || ((phrase[i] === "W") && (mot[i] === "X")) || ((phrase[i] === "X") && (mot[i] === "W")) || ((phrase[i] === "Y") && (mot[i] === "V")) || ((phrase[i] === "Z") && (mot[i] === "U")) || ((phrase[i] === "A") && (mot[i] === "T")) || ((phrase[i] === "B") && (mot[i] === "S")) || ((phrase[i] === "C") && (mot[i] === "R")) || ((phrase[i] === "D") && (mot[i] === "Q")) || ((phrase[i] === "E") && (mot[i] === "P")) || ((phrase[i] === "F") && (mot[i] === "O")) || ((phrase[i] === "G") && (mot[i] === "N")) || ((phrase[i] === "H") && (mot[i] === "M")) || ((phrase[i] === "I") && (mot[i] === "L")) || ((phrase[i] === "J") && (mot[i] === "K")) || ((phrase[i] === "K") && (mot[i] === "J")) || ((phrase[i] === "L") && (mot[i] === "I")) || ((phrase[i] === "M") && (mot[i] === "H")) || ((phrase[i] === "N") && (mot[i] === "G")) || ((phrase[i] === "O") && (mot[i] === "F")) || ((phrase[i] === "P") && (mot[i] === "E")) || ((phrase[i] === "Q") && (mot[i] === "D")) || ((phrase[i] === "R") && (mot[i] === "C")) || ((phrase[i] === "S") && (mot[i] === "B"))) {

			phraseCodee += "T";

		} else if (((phrase[i] === "U") && (mot[i] === "A")) || ((phrase[i] === "V") && (mot[i] === "Z")) || ((phrase[i] === "W") && (mot[i] === "Y")) || ((phrase[i] === "X") && (mot[i] === "X")) || ((phrase[i] === "Y") && (mot[i] === "W")) || ((phrase[i] === "Z") && (mot[i] === "V")) || ((phrase[i] === "A") && (mot[i] === "U")) || ((phrase[i] === "B") && (mot[i] === "T")) || ((phrase[i] === "C") && (mot[i] === "S")) || ((phrase[i] === "D") && (mot[i] === "R")) || ((phrase[i] === "E") && (mot[i] === "Q")) || ((phrase[i] === "F") && (mot[i] === "P")) || ((phrase[i] === "G") && (mot[i] === "O")) || ((phrase[i] === "H") && (mot[i] === "N")) || ((phrase[i] === "I") && (mot[i] === "M")) || ((phrase[i] === "J") && (mot[i] === "L")) || ((phrase[i] === "K") && (mot[i] === "K")) || ((phrase[i] === "L") && (mot[i] === "J")) || ((phrase[i] === "M") && (mot[i] === "I")) || ((phrase[i] === "N") && (mot[i] === "H")) || ((phrase[i] === "O") && (mot[i] === "G")) || ((phrase[i] === "P") && (mot[i] === "F")) || ((phrase[i] === "Q") && (mot[i] === "E")) || ((phrase[i] === "R") && (mot[i] === "D")) || ((phrase[i] === "S") && (mot[i] === "C")) || ((phrase[i] === "T") && (mot[i] === "B"))) {

			phraseCodee += "U";

		} else if (((phrase[i] === "V") && (mot[i] === "A")) || ((phrase[i] === "W") && (mot[i] === "Z")) || ((phrase[i] === "X") && (mot[i] === "Y")) || ((phrase[i] === "Y") && (mot[i] === "X")) || ((phrase[i] === "Z") && (mot[i] === "W")) || ((phrase[i] === "A") && (mot[i] === "V")) || ((phrase[i] === "B") && (mot[i] === "U")) || ((phrase[i] === "C") && (mot[i] === "T")) || ((phrase[i] === "D") && (mot[i] === "S")) || ((phrase[i] === "E") && (mot[i] === "R")) || ((phrase[i] === "F") && (mot[i] === "Q")) || ((phrase[i] === "G") && (mot[i] === "P")) || ((phrase[i] === "H") && (mot[i] === "O")) || ((phrase[i] === "I") && (mot[i] === "N")) || ((phrase[i] === "J") && (mot[i] === "M")) || ((phrase[i] === "K") && (mot[i] === "L")) || ((phrase[i] === "L") && (mot[i] === "K")) || ((phrase[i] === "M") && (mot[i] === "J")) || ((phrase[i] === "N") && (mot[i] === "I")) || ((phrase[i] === "O") && (mot[i] === "H")) || ((phrase[i] === "P") && (mot[i] === "G")) || ((phrase[i] === "Q") && (mot[i] === "F")) || ((phrase[i] === "R") && (mot[i] === "E")) || ((phrase[i] === "S") && (mot[i] === "D")) || ((phrase[i] === "T") && (mot[i] === "C")) || ((phrase[i] === "U") && (mot[i] === "B"))) {

			phraseCodee += "V";

		} else if (((phrase[i] === "W") && (mot[i] === "A")) || ((phrase[i] === "X") && (mot[i] === "Z")) || ((phrase[i] === "Y") && (mot[i] === "Y")) || ((phrase[i] === "Z") && (mot[i] === "X")) || ((phrase[i] === "A") && (mot[i] === "W")) || ((phrase[i] === "B") && (mot[i] === "V")) || ((phrase[i] === "C") && (mot[i] === "U")) || ((phrase[i] === "D") && (mot[i] === "T")) || ((phrase[i] === "E") && (mot[i] === "S")) || ((phrase[i] === "F") && (mot[i] === "R")) || ((phrase[i] === "G") && (mot[i] === "Q")) || ((phrase[i] === "H") && (mot[i] === "P")) || ((phrase[i] === "I") && (mot[i] === "O")) || ((phrase[i] === "J") && (mot[i] === "N")) || ((phrase[i] === "K") && (mot[i] === "M")) || ((phrase[i] === "L") && (mot[i] === "L")) || ((phrase[i] === "M") && (mot[i] === "K")) || ((phrase[i] === "N") && (mot[i] === "J")) || ((phrase[i] === "O") && (mot[i] === "I")) || ((phrase[i] === "P") && (mot[i] === "H")) || ((phrase[i] === "Q") && (mot[i] === "G")) || ((phrase[i] === "R") && (mot[i] === "F")) || ((phrase[i] === "S") && (mot[i] === "E")) || ((phrase[i] === "T") && (mot[i] === "D")) || ((phrase[i] === "U") && (mot[i] === "C")) || ((phrase[i] === "V") && (mot[i] === "B"))) {

			phraseCodee += "W";

		} else if (((phrase[i] === "X") && (mot[i] === "A")) || ((phrase[i] === "Y") && (mot[i] === "Z")) || ((phrase[i] === "Z") && (mot[i] === "Y")) || ((phrase[i] === "A") && (mot[i] === "X")) || ((phrase[i] === "B") && (mot[i] === "W")) || ((phrase[i] === "C") && (mot[i] === "V")) || ((phrase[i] === "D") && (mot[i] === "U")) || ((phrase[i] === "E") && (mot[i] === "T")) || ((phrase[i] === "F") && (mot[i] === "S")) || ((phrase[i] === "G") && (mot[i] === "R")) || ((phrase[i] === "H") && (mot[i] === "Q")) || ((phrase[i] === "I") && (mot[i] === "P")) || ((phrase[i] === "J") && (mot[i] === "O")) || ((phrase[i] === "K") && (mot[i] === "N")) || ((phrase[i] === "L") && (mot[i] === "M")) || ((phrase[i] === "M") && (mot[i] === "L")) || ((phrase[i] === "N") && (mot[i] === "K")) || ((phrase[i] === "O") && (mot[i] === "J")) || ((phrase[i] === "P") && (mot[i] === "I")) || ((phrase[i] === "Q") && (mot[i] === "H")) || ((phrase[i] === "R") && (mot[i] === "G")) || ((phrase[i] === "S") && (mot[i] === "F")) || ((phrase[i] === "T") && (mot[i] === "E")) || ((phrase[i] === "U") && (mot[i] === "D")) || ((phrase[i] === "V") && (mot[i] === "C")) || ((phrase[i] === "W") && (mot[i] === "B"))) {

			phraseCodee += "X";

		} else if (((phrase[i] === "Y") && (mot[i] === "A")) || ((phrase[i] === "Z") && (mot[i] === "Z")) || ((phrase[i] === "A") && (mot[i] === "Y")) || ((phrase[i] === "B") && (mot[i] === "X")) || ((phrase[i] === "C") && (mot[i] === "W")) || ((phrase[i] === "D") && (mot[i] === "V")) || ((phrase[i] === "E") && (mot[i] === "U")) || ((phrase[i] === "F") && (mot[i] === "T")) || ((phrase[i] === "G") && (mot[i] === "S")) || ((phrase[i] === "H") && (mot[i] === "R")) || ((phrase[i] === "I") && (mot[i] === "Q")) || ((phrase[i] === "J") && (mot[i] === "P")) || ((phrase[i] === "K") && (mot[i] === "O")) || ((phrase[i] === "L") && (mot[i] === "N")) || ((phrase[i] === "M") && (mot[i] === "M")) || ((phrase[i] === "N") && (mot[i] === "L")) || ((phrase[i] === "O") && (mot[i] === "K")) || ((phrase[i] === "P") && (mot[i] === "J")) || ((phrase[i] === "Q") && (mot[i] === "I")) || ((phrase[i] === "R") && (mot[i] === "H")) || ((phrase[i] === "S") && (mot[i] === "G")) || ((phrase[i] === "T") && (mot[i] === "F")) || ((phrase[i] === "U") && (mot[i] === "E")) || ((phrase[i] === "V") && (mot[i] === "D")) || ((phrase[i] === "W") && (mot[i] === "C")) || ((phrase[i] === "X") && (mot[i] === "B"))) {

			phraseCodee += "Y";

		} else if (((phrase[i] === "Z") && (mot[i] === "A")) || ((phrase[i] === "A") && (mot[i] === "Z")) || ((phrase[i] === "B") && (mot[i] === "Y")) || ((phrase[i] === "C") && (mot[i] === "X")) || ((phrase[i] === "D") && (mot[i] === "W")) || ((phrase[i] === "E") && (mot[i] === "V")) || ((phrase[i] === "F") && (mot[i] === "U")) || ((phrase[i] === "G") && (mot[i] === "T")) || ((phrase[i] === "H") && (mot[i] === "S")) || ((phrase[i] === "I") && (mot[i] === "R")) || ((phrase[i] === "J") && (mot[i] === "Q")) || ((phrase[i] === "K") && (mot[i] === "P")) || ((phrase[i] === "L") && (mot[i] === "O")) || ((phrase[i] === "M") && (mot[i] === "N")) || ((phrase[i] === "N") && (mot[i] === "M")) || ((phrase[i] === "O") && (mot[i] === "L")) || ((phrase[i] === "P") && (mot[i] === "K")) || ((phrase[i] === "Q") && (mot[i] === "J")) || ((phrase[i] === "R") && (mot[i] === "I")) || ((phrase[i] === "S") && (mot[i] === "H")) || ((phrase[i] === "T") && (mot[i] === "G")) || ((phrase[i] === "U") && (mot[i] === "F")) || ((phrase[i] === "V") && (mot[i] === "E")) || ((phrase[i] === "W") && (mot[i] === "D"))|| ((phrase[i] === "X") && (mot[i] === "C")) || ((phrase[i] === "Y") && (mot[i] === "B"))) {

			phraseCodee += "Z";

		} else {
			
			phraseCodee += phrase[i];
		}
	}

	return phraseCodee;
}

// codage Atbash 
function coderAtbash (phrase) {
	var phraseCodee = "";

	for (i = 0; i < phrase.length; i++) {

		if (phrase[i] === "Z") {
			phraseCodee += "A";
		} else if (phrase[i] === "Y") {
			phraseCodee += "B";
		} else if (phrase[i] === "X") {
			phraseCodee += "C";
		} else if (phrase[i] === "W") {
			phraseCodee += "D";
		} else if (phrase[i] === "V") {
			phraseCodee += "E";
		} else if (phrase[i] === "U") {
			phraseCodee += "F";
		} else if (phrase[i] === "T") {
			phraseCodee += "G";
		} else if (phrase[i] === "S") {
			phraseCodee += "H";
		} else if (phrase[i] === "R") {
			phraseCodee += "I";
		} else if (phrase[i] === "Q") {
			phraseCodee += "J";
		} else if (phrase[i] === "P") {
			phraseCodee += "K";
		} else if (phrase[i] === "O") {
			phraseCodee += "L";
		} else if (phrase[i] === "N") {
			phraseCodee += "M";
		} else if (phrase[i] === "M") {
			phraseCodee += "N";
		} else if (phrase[i] === "L") {
			phraseCodee += "O";
		} else if (phrase[i] === "K") {
			phraseCodee += "P";
		} else if (phrase[i] === "J") {
			phraseCodee += "Q";
		} else if (phrase[i] === "I") {
			phraseCodee += "R";
		} else if (phrase[i] === "H") {
			phraseCodee += "S";
		} else if (phrase[i] === "G") {
			phraseCodee += "T";
		} else if (phrase[i] === "F") {
			phraseCodee += "U";
		} else if (phrase[i] === "E") {
			phraseCodee += "V";
		} else if (phrase[i] === "D") {
			phraseCodee += "W";
		} else if (phrase[i] === "C") {
			phraseCodee += "X";
		} else if (phrase[i] === "B") {
			phraseCodee += "Y";
		} else if (phrase[i] === "A") {
			phraseCodee += "Z";
		} else {
			phraseCodee += phrase[i];
		}
	}
	return phraseCodee;
}

// codage Caesar
function coderCaesar (phrase) {
	var phraseCodee = "";

	for (i = 0; i < phrase.length; i++) {

		if (phrase[i] === "A") {
			phraseCodee += "D";
		} else if (phrase[i] === "B") {
			phraseCodee += "E";
		} else if (phrase[i] === "C") {
			phraseCodee += "F";
		} else if (phrase[i] === "D") {
			phraseCodee += "G";
		} else if (phrase[i] === "E") {
			phraseCodee += "H";
		} else if (phrase[i] === "F") {
			phraseCodee += "I";
		} else if (phrase[i] === "G") {
			phraseCodee += "J";
		} else if (phrase[i] === "H") {
			phraseCodee += "K";
		} else if (phrase[i] === "I") {
			phraseCodee += "L";
		} else if (phrase[i] === "J") {
			phraseCodee += "M";
		} else if (phrase[i] === "K") {
			phraseCodee += "N";
		} else if (phrase[i] === "L") {
			phraseCodee += "O";
		} else if (phrase[i] === "M") {
			phraseCodee += "P";
		} else if (phrase[i] === "N") {
			phraseCodee += "Q";
		} else if (phrase[i] === "O") {
			phraseCodee += "R";
		} else if (phrase[i] === "P") {
			phraseCodee += "S";
		} else if (phrase[i] === "Q") {
			phraseCodee += "T";
		} else if (phrase[i] === "R") {
			phraseCodee += "U";
		} else if (phrase[i] === "S") {
			phraseCodee += "V";
		} else if (phrase[i] === "T") {
			phraseCodee += "W";
		} else if (phrase[i] === "U") {
			phraseCodee += "X";
		} else if (phrase[i] === "V") {
			phraseCodee += "Y";
		} else if (phrase[i] === "W") {
			phraseCodee += "Z";
		} else if (phrase[i] === "X") {
			phraseCodee += "A";
		} else if (phrase[i] === "Y") {
			phraseCodee += "B";
		} else if (phrase[i] === "Z") {
			phraseCodee += "C";
		} else {
			phraseCodee += phrase[i];
		}
	}
	return phraseCodee;
}

// codage A1Z26
function coderAZ (phrase) {
	var phraseCodee = "";

	for (i = 0; i < phrase.length; i++) {

		if (phrase[i] === "A") {
			phraseCodee += "1-";
		} else if (phrase[i] === "B") {
			phraseCodee += "2-";
		} else if (phrase[i] === "C") {
			phraseCodee += "3-";
		} else if (phrase[i] === "D") {
			phraseCodee += "4-";
		} else if (phrase[i] === "E") {
			phraseCodee += "5-";
		} else if (phrase[i] === "F") {
			phraseCodee += "6-";
		} else if (phrase[i] === "G") {
			phraseCodee += "7-";
		} else if (phrase[i] === "H") {
			phraseCodee += "8-";
		} else if (phrase[i] === "I") {
			phraseCodee += "9-";
		} else if (phrase[i] === "J") {
			phraseCodee += "10-";
		} else if (phrase[i] === "K") {
			phraseCodee += "11-";
		} else if (phrase[i] === "L") {
			phraseCodee += "12-";
		} else if (phrase[i] === "M") {
			phraseCodee += "13-";
		} else if (phrase[i] === "N") {
			phraseCodee += "14-";
		} else if (phrase[i] === "O") {
			phraseCodee += "15-";
		} else if (phrase[i] === "P") {
			phraseCodee += "16-";
		} else if (phrase[i] === "Q") {
			phraseCodee += "17-";
		} else if (phrase[i] === "R") {
			phraseCodee += "18-";
		} else if (phrase[i] === "S") {
			phraseCodee += "19-";
		} else if (phrase[i] === "T") {
			phraseCodee += "20-";
		} else if (phrase[i] === "U") {
			phraseCodee += "21-";
		} else if (phrase[i] === "V") {
			phraseCodee += "22-";
		} else if (phrase[i] === "W") {
			phraseCodee += "23-";
		} else if (phrase[i] === "X") {
			phraseCodee += "24-";
		} else if (phrase[i] === "Y") {
			phraseCodee += "25-";
		} else if (phrase[i] === "Z") {
			phraseCodee += "26-";
		} else {
			phraseCodee += phrase[i];
		}
	}
	return phraseCodee;
}

// codage combiné
function coderCombine (phrase) {
	var phraseCodee = "";

	for (i = 0; i < phrase.length; i++) {

		if (phrase[i] === "N") {
			phraseCodee += "10-";
		} else if (phrase[i] === "M") {
			phraseCodee += "11-";
		} else if (phrase[i] === "L") {
			phraseCodee += "12-";
		} else if (phrase[i] === "K") {
			phraseCodee += "13-";
		} else if (phrase[i] === "J") {
			phraseCodee += "14-";
		} else if (phrase[i] === "I") {
			phraseCodee += "15-";
		} else if (phrase[i] === "H") {
			phraseCodee += "16-";
		} else if (phrase[i] === "G") {
			phraseCodee += "17-";
		} else if (phrase[i] === "F") {
			phraseCodee += "18-";
		} else if (phrase[i] === "E") {
			phraseCodee += "19-";
		} else if (phrase[i] === "D") {
			phraseCodee += "20-";
		} else if (phrase[i] === "C") {
			phraseCodee += "21-";
		} else if (phrase[i] === "B") {
			phraseCodee += "22-";
		} else if (phrase[i] === "A") {
			phraseCodee += "23-";
		} else if (phrase[i] === "Z") {
			phraseCodee += "24-";
		} else if (phrase[i] === "Y") {
			phraseCodee += "25-";
		} else if (phrase[i] === "X") {
			phraseCodee += "26-";
		} else if (phrase[i] === "W") {
			phraseCodee += "1-";
		} else if (phrase[i] === "V") {
			phraseCodee += "2-";
		} else if (phrase[i] === "U") {
			phraseCodee += "3-";
		} else if (phrase[i] === "T") {
			phraseCodee += "4-";
		} else if (phrase[i] === "S") {
			phraseCodee += "5-";
		} else if (phrase[i] === "R") {
			phraseCodee += "6-";
		} else if (phrase[i] === "Q") {
			phraseCodee += "7-";
		} else if (phrase[i] === "P") {
			phraseCodee += "8-";
		} else if (phrase[i] === "O") {
			phraseCodee += "9-";
		} else {
			phraseCodee += phrase[i];
		}
	}
	return phraseCodee;
}

// GESTION CHANGEMENT CODE
var typeCodeChoisi = document.getElementsByName("typeCode");
var infos = document.createElement("p");
var lien = document.createElement("a");

for (var i = 0; i < typeCodeChoisi.length; i++) {
	typeCodeChoisi[i].addEventListener("change", function (e) {
		if (e.target.value == "vigenere") {
			document.getElementById("infos").style.visibility = "visible";
			document.getElementById("zoneMotCle").style.visibility = "visible";
			document.getElementById("phraseRetournee").textContent = "";
			
			infos.textContent = "Le chiffre de Vigenère est un dérivé du chiffre de Caesar où chaque lettre est décalée en fonction d'un mot clé. Le chiffre de Vigenère utilise une table de Vigenère pour coder le message.";
			lien.textContent = "En savoir plus";
			lien.href = "https://fr.wikipedia.org/wiki/Chiffre_de_Vigen%C3%A8re";
			
			document.getElementById("infos").appendChild(infos);
			document.getElementById("infos").appendChild(lien);
			
		} else if (e.target.value == "atbash") {
			document.getElementById("infos").style.visibility = "visible";
			document.getElementById("zoneMotCle").style.visibility = "hidden";
			document.getElementById("phraseRetournee").textContent = "";
			
			infos.textContent = "Les codes Atbash se décodent en inversant les lettres en fonction de leur place dans l'alphabet. Par exemple, un A devient un Z car il s'agit des lettres ayant la première place dans l'alphabet (en partant du début pour A, et de la fin pour Z).";
			lien.textContent = "En savoir plus";
			lien.href = "https://fr.wikipedia.org/wiki/Atbash";
			
			document.getElementById("infos").appendChild(infos);
			document.getElementById("infos").appendChild(lien);

		} else if (e.target.value == "caesar") {
			document.getElementById("infos").style.visibility = "visible";
			document.getElementById("zoneMotCle").style.visibility = "hidden";
			document.getElementById("phraseRetournee").textContent = "";
			
			infos.textContent = "Le chiffre de Caesar (César) utilisé dans Gravity Falls substitue la lettre originale par la troisième lettre qui suit. Dans le cas de X, Y et  Z, il faut retourner au début de l'alphabet.";
			lien.textContent = "En savoir plus";
			lien.href = "https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage";
			
			document.getElementById("infos").appendChild(infos);
			document.getElementById("infos").appendChild(lien);

		} else if (e.target.value == "a1z26") {
			document.getElementById("infos").style.visibility = "visible";
			document.getElementById("zoneMotCle").style.visibility = "hidden";
			document.getElementById("phraseRetournee").textContent = "";
			
			infos.textContent = "Le code A1Z26 est une simple substitution qui se décode en remplaçant la Nième lettre de l'alphabet pour le nombre N donné.";
			lien.textContent = "";
			
			document.getElementById("infos").appendChild(infos);

		} else if (e.target.value == "combine") {
			document.getElementById("infos").style.visibility = "visible";
			document.getElementById("zoneMotCle").style.visibility = "hidden";
			document.getElementById("phraseRetournee").textContent = "";
			
			infos.textContent = "Un code combiné est un mélange de deux codes ou plus. Ici, il est traduit en convertissant les chiffres en A1Z26, puis les lettres obtenues en Atbash et enfin en Caesar.";
			lien.textContent = "";
			
			document.getElementById("infos").appendChild(infos);
		}
	});
}

// supprimer infos quand reset
var form = document.querySelector("form");
form.addEventListener("reset", function (e) {
	document.getElementById("infos").style.visibility = "hidden";
	document.getElementById("phraseRetournee").textContent = "";
});

window.addEventListener("load", function() {
	document.getElementById("phraseRetournee").textContent = "";
	document.getElementById("phraseDecodee").value = "";
});

// CODAGE
form.addEventListener("submit", function(e) {
	e.preventDefault();
	
	if (form.elements.typeCode.value == "vigenere") {
		// récupération phrase codée et mot clé
		var phraseDecodee = form.elements.phraseDecodee.value;
		var motCle = form.elements.motCle.value;
		
		// utilisation des fonctions
		var motCleEspaces = gestionEspacesVigenere(phraseDecodee.toUpperCase(), motCle.toUpperCase());
		var phraseCodee = coderVigenere(phraseDecodee.toUpperCase(), motCleEspaces);
		
	} else if (form.elements.typeCode.value == "atbash") {
		var phraseDecodee = form.elements.phraseDecodee.value;
		var phraseCodee = coderAtbash(phraseDecodee.toUpperCase());
		
	} else if (form.elements.typeCode.value == "caesar") {
		var phraseDecodee = form.elements.phraseDecodee.value;
		var phraseCodee = coderCaesar(phraseDecodee.toUpperCase());
		
	} else if (form.elements.typeCode.value == "a1z26") {
		var phraseDecodee = form.elements.phraseDecodee.value;
		var phraseCodee = coderAZ(phraseDecodee.toUpperCase());
		
	} else if (form.elements.typeCode.value == "combine") {
		var phraseDecodee = form.elements.phraseDecodee.value;
		var phraseCodee = coderCombine(phraseDecodee.toUpperCase());
		
	} else {
		var phraseCodee = "Erreur";
	}
	
	document.getElementById("phraseRetournee").textContent = phraseCodee;
});