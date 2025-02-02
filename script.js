let Age = prompt("რამდენი წლის ხარ?");

if (Age < 12) {
  console.log("თქვენ არ გაქვთ შესვლის უფლება.");
} else if (Age >= 12) {
  console.log("თქვენ შეგიძლიათ დაესწროთ ფილმს.");
} else {
  console.log("გთხოვთ შეიყვანოთ ასაკი");
}

let Light = prompt("რომელი ფერია შუქნიშანზე?");

if (Light === "ყვითელი") {
  console.log("მოემზადე");
} else if (Light === "წითელი") {
  console.log("გაჩერდი");
} else if (Light === "მწვანე") {
  console.log("წადი");
} else {
  console.log("ასეთი ფერი შუქნიშანს არაქვს");
}

let Time = prompt("რომელი საათია?");

if (Time < 12) {
  console.log("დილა მშვიდობის");
} else if (Time < 18) {
  console.log("შუადღე მშვიდობის");
} else {
  console.log("საღამო მშვიდობის");
}

let Grade = prompt("ჩაწერეთ თქვენი ქულა");

if (Grade >= 90) {
  console.log("A");
} else if (Grade >= 70) {
  console.log("B");
} else if (Grade >= 50) {
  console.log("C");
} else {
  console.log("F");
}
