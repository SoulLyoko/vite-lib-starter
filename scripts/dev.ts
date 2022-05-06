import { execSync } from "child_process";
import { switch3, switch2 } from "./utils";

const isV2 = process.argv.includes("-v2");
isV2 ? switch2() : switch3();
console.log("Local: http://localhost:3000/");
execSync("vite --force");
