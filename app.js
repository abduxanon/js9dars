//101-misol

// function yigindi(n) {
//   let son = 0;
//   for (let i = 1; i <= n; i++) {
//     son += i;
//   }
//   return son;
// }
// console.log(yigindi(+prompt("son")));

//102-misol

// function minmax(son, object) {
//     let { min, max } = object;
//     return son >= min && son <= max;
// }
// console.log(minmax(4, { min: 5, max: 6 }));

//103-misol

// function kvadrat(son) {
//   let kvadrat = son * son;
//   let qabul = kvadrat % 10;
//   return qabul == son;
// }
// console.log(kvadrat(6));

//104-misol

// function element(massiv) {
//   let Massiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//     Massiv.push(massiv[i] + i);
//   }
//   return Massiv;
// }
// console.log(element([0, 0, 0, 0, 0]));

//105-misol

// function ajratish(ichimliklar) {
//   let yoq = ichimliklar.filter(
//     (ichimlik) => ichimlik !== "cola" && ichimlik !== "fanta"
//   );
//   return yoq;
// }
// console.log(ajratish(["lemonade", "beer", "water"]));

//106-misol

// function Namuna(son1) {
//   let son2 = son1.toString();
//   return son2.length;
// }
// console.log(Namuna(12345));

//107-misol

// function harf(matn) {
//     let kattaHarflar = matn.match(/[A-Z]/g);
//     return kattaHarflar ? kattaHarflar.length : 0;
// }
// console.log(harf("AdZeGbgngL"));
