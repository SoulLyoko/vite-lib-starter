import { execSync } from "child_process";

const isInit = process.argv.includes("-init");
if (isInit) {
  execSync("yarn conventional-changelog -p angular -i CHANGELOG.md -s -r 0");
} else {
  execSync("yarn conventional-changelog -p angular -i CHANGELOG.md -s");
}
