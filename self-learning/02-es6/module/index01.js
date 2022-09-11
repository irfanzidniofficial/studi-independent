// Export:

export function foo() {
  // ...
}

export var kode = 42;

var bar = [1, 2, 3];

export { bar };

// Cara lain
function foo() {
  // .......
}

var kode = 42;
var bar = [1, 2, 3];

export { foo, kode, bar };

// Rename

function foo() {
  // .......
}

export { foo as kode };

var kode = 42;

export { kode };
kode = 100;
