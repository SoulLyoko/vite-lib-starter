import { execSync } from "child_process";
import { switch3 } from "./utils";

switch3();
execSync("vue-tsc --noEmit");
execSync("vite build");
