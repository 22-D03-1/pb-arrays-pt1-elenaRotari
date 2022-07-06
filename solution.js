//1 Deklariere eine Variable namens `euroCities` und weise ihr ein Array mit 5 europäischen Städten zu, z.B. `["Paris", "London", "Valletta", "Prag", "Rom"]`. Deklariere eine weitere Variable mit dem Namen `secondCity` und weise ihr das zweite Element des Arrays als Wert zu.#

const euroCities = ["Paris", "London", "Valletta", "Prag", "Rom"];
console.log({ euroCities });

const secondCity = euroCities[1];
console.log(secondCity);
//2  Ändere den ersten Eintrag im Array zu "Berlin".

euroCities[0] = "Berlin";
console.log({ euroCities });
//3  Gib die Länge des Arrays `euroCities` aus.

console.log(euroCities.length);
//4. Entferne das letzte Element aus dem Array `euroCities`.

euroCities.pop();
console.log({ euroCities });

//5 Verwende eine Array-Methode, um "Budapest" an das Ende des Arrays `euroCities" anzuhängen.

euroCities.push("Budapest");
console.log({ euroCities });
//6 Erstelle eine weitere Variable mit dem Namen `asianCities` und weise ihr ein Array mit mindestens 5 Städten zu.

const asianCities = [
  "Tokio",
  "Seol",
  "Wuhan",
  "Mumbai",
  "Beijing",
  "Shanghai ",
];
console.log({ asianCities });
//7 Benutze eine Methode, um `euroCities` und `asianCities` in einem Array zu kombinieren. Speichere das Ergebnis in der neuen Variablen `WorldCities`.

const worldCities = euroCities.concat(asianCities);
console.log({ worldCities });

//8  Kehr die Reihenfolge von `worldCities` um.

const reverse = worldCities.reverse();
console.log({ reverse });

//9 **Bonus**: Entferne den dritten Eintrag aus dem Array `euroCities`.

euroCities.splice(2, 1);
console.log({ euroCities });

//10 **Bonus**: Benutze eine Array-Methode, um die Punkte 2 bis 4 aus dem Array `asianCities` auszuwählen und speichere sie in einer anderen Variable.

const newAsianCities = asianCities.slice(1, 4);
console.log({ newAsianCities });

//11.1**Bonus**: Ersetze den 3. Eintrag im Array von `worldCities` durch "Toronto".

worldCities[2] = "Toronto";
console.log(worldCities);
//11.2
worldCities.splice(2, 1, "Toronto");
console.log({ worldCities });

//12 **Bonus**: Entferne keine Elemente aus dem Array `worldCities`, sondern füge "Washington" an der zweiten Position ein.

worldCities.splice(1, 0, "Washington");
console.log({ worldCities });

//13**Bonus** Schreibe ein Programm, um alle Elemente des Ergebnisses (`worldCities`) zu einer Zeichenkette zu verbinden.

console.log(worldCities.join(", "));

/***Zusätzliche Übung**
Gib die Ergebnisse in der Konsole aus.

1. Erstelle ein Array mit den Namen deiner Geschwister oder den Namen deiner Lieblingsfilmfiguren.
2. Erstelle ein Array mit den Namen deiner Eltern.
3. Kombiniere diese beiden Arrays.
4. Füge die Namen deiner Haustiere hinzu.
5. Drehe die Reihenfolge der Felder um.
6. Greife auf einen der Namen deiner Eltern zu.
7. Aktualisiere den Namen eines deiner Elternteile.*/

const geschwister = ["Victor", "Ion"];
const parents = ["Valeriu", "Vera"];

const myFamily = geschwister.concat(parents);
console.log({ myFamily });

myFamily.push("Leo");
console.log({ myFamily });

myFamily.reverse();
console.log({ myFamily });

console.log({ myFamily }[1]);

myFamily[2] = "Valeriu Rotari";
console.log({ myFamily });
