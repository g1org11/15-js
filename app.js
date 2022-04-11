// 1.
const currentday = new Date(2).getDay();
switch (currentday) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thuesday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log(otherday);
    break;
}
//  2.
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
// 3.
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}
// 4.
let b = 0;
do {
  console.log(b);
  b++;
} while (b < 150);
// 5.
let arr = [];
for (i = 0; i < 150; i++) {
  i = i * i;
  arr.push(i);
}
console.log(arr);
