// default function dengan arrow

let Func = (a, b = 10) => a + b;

Func(20); // 20 + 10 = 30
Func(20, 50); // 20 + 50=70

let notWorking = (a = 10, b) => a + b;

notWorking(20); // NaN
