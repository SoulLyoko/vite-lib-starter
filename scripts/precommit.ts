import { execSync } from "child_process";
import { switch3, copyDocs } from "./utils";

switch3();
copyDocs();
execSync("git add packages/CHANGELOG.md");
execSync("git add packages/index.md");
