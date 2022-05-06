const { switch3, switch2, exec } = require("./utils");

const isV2 = process.argv.includes("-v2");
isV2 ? switch2() : switch3();
console.log("Local: http://localhost:3000/");
exec("vite --force");
