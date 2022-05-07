import { execSync } from "child_process";
import { switch3, copyDocs } from "./utils";

switch3();
copyDocs("readme");
execSync("git add docs/index.md");
