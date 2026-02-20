console.log(process.version);
console.log("Hello");

function add(a, b) {
    return a + b;
}

let result;
for (let i = 1; i < 10; i++) {
    result = add(i, i + 1);
}

console.log(result);