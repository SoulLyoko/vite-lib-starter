const { switch3, copyDocs, exec } = require("./utils");
const docsConfig = require("../docs/.vitepress/config");

const isDev = process.argv.includes("-d");
const isBuild = process.argv.includes("-b");
const isServe = process.argv.includes("-s");

switch3();
copyDocs();
if (isDev) {
  console.log(`Local: http://localhost:3000${docsConfig.base}/`);
  exec("vitepress dev docs");
}
if (isBuild) {
  exec("vitepress build docs");
}
if (isServe) {
  console.log(`Local: http://localhost:5000${docsConfig.base}/`);
  exec("vitepress serve docs");
}
