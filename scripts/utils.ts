import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import packageJson from "../package.json";

export function getVueVersion() {
  const vue = packageJson.devDependencies.vue;
  const version = vue.match(/\d{1,}/)?.[0];
  return version as "2" | "3";
}

export function switch2() {
  if (getVueVersion() != "2") {
    execSync("yarn add vue@2");
    execSync("vue-demi-switch 2");
  }
}

export function switch3() {
  if (getVueVersion() != "3") {
    execSync("yarn add vue");
    execSync("vue-demi-switch 3");
  }
}

export function copyDocs({ readme = true, changelog = true } = {}) {
  readme &&
    fs.writeFileSync(path.join(__dirname, "../docs/index.md"), fs.readFileSync(path.join(__dirname, "../README.md")));
  changelog &&
    fs.writeFileSync(
      path.join(__dirname, "../docs/CHANGELOG.md"),
      fs.readFileSync(path.join(__dirname, "../CHANGELOG.md"))
    );
}
