// najdeme elementy na stránce
const input = document.querySelector("#input-hrana");
const vysledek = document.querySelector("#vysledek");
const krychleObr1 = document.querySelector("#krychle-obr-1");
const krychleObr2 = document.querySelector("#krychle-obr-2");
const krychleObr3 = document.querySelector("#krychle-obr-3");

// funkce pro výpočet objemu krychle
function vypocetObjemuKrychle(hrana) {
  return Math.pow(hrana, 3);
}

// funkce pro zobrazení výsledku
function zobrazVysledek() {
  // získáme délku hrany od uživatele
  const hrana = parseFloat(input.value);

  // kontrola, zda uživatel zadává platné číslo
  if (isNaN(hrana)) {
    vysledek.textContent = "Zadejte platné číslo!";
    return;
  }

  // vypočítáme objem krychle
  const objemKrychle = vypocetObjemuKrychle(hrana);

  // zobrazíme výsledek na stránce
  vysledek.textContent = `Objem krychle o hraně ${hrana} je ${objemKrychle} m^3.`;

  // zobrazíme obrázky krychle
  krychleObr1.setAttribute("src", "krychle1.png");
  
}

// připojíme funkci k tlačítku pro výpočet
const tlacitko = document.querySelector("#tlacitko");
tlacitko.addEventListener("click", zobrazVysledek);