import { execSync } from "child_process";
import { switch3, copyDocs } from "./utils";

switch3();
copyDocs();
execSync("git add docs/CHANGELOG.md");
execSync("git add docs/index.md");
