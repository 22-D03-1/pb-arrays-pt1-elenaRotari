//1
const euroCities = ["Paris", "London", "Valletta", "Prag", "Rom"];
console.log(euroCities);

const secondCity = euroCities[1];
console.log(secondCity);
//2
euroCities[0] = "Berlin";
//3
console.log(euroCities.length);
//4
euroCities.pop();

//5
euroCities.push("Budapest");
console.log(euroCities);
//6
const asianCities = [
  "Tokio",
  "Seol",
  "Wuhan",
  "Mumbai",
  "Beijing",
  "Shanghai ",
];
//7
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//8
const reverse = worldCities.reverse();
console.log(reverse);

//9
euroCities.splice();
