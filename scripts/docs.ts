import { execSync } from "child_process";
import { switch3, copyDocs } from "./utils";
import docsConfig from "../docs/.vitepress/config";

const isDev = process.argv.includes("-d");
const isBuild = process.argv.includes("-b");
const isServe = process.argv.includes("-s");

switch3();
copyDocs();
if (isDev) {
  console.log(`Local: http://localhost:3000${docsConfig.base}`);
  execSync("vitepress dev docs");
}
if (isBuild) {
  execSync("vitepress build docs");
}
if (isServe) {
  console.log(`Local: http://localhost:5000${docsConfig.base}`);
  execSync("vitepress serve docs");
}
