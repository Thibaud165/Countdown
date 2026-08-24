// ==========================
// Dates importantes /!\ +1 mois
// ==========================
// format : AAAA, MM, JJ

let depart = new Date(2026, 8, 1); // 1 septembre 2025
let fin = new Date(2027, 8, 4);    // 4 juillet 2026
let vacance = new Date(2026, 11, 17); // mois 3 = avril (+1)

// ==========================
// Calcul des jours
// ==========================

let maintenant = new Date();

let JoursActuel = Math.floor((maintenant - depart) / (1000 * 60 * 60 * 24));
let JoursRestant = Math.ceil((fin - maintenant) / (1000 * 60 * 60 * 24));
let JoursTotal = Math.ceil((fin - depart) / (1000 * 60 * 60 * 24));
let JoursVacance = Math.ceil((vacance - maintenant) / (1000 * 60 * 60 * 24));

// ==========================
// Affichage compteur jours
// ==========================

document.getElementById("compteurJours").textContent = `${JoursRestant}/${JoursTotal}`;
document.getElementById("compteurJoursVacance").textContent = JoursVacance;

// ==========================
// Cases spéciales
// ==========================

let specialIndexes = [
    47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
    110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 
    159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 
    245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createCases() {
    let container = document.getElementById("box-case");

    for (let i = 1; i <= 300; i++) {
        let div = document.createElement("div");
        div.classList.add("case");

        if (specialIndexes.includes(i)) {
            div.classList.add("special");
            div.classList.add("active");
        }

        if (i <= JoursActuel) {
            div.classList.add("passer");
        }

        container.appendChild(div);
        await sleep(5);
    }
}

createCases();
