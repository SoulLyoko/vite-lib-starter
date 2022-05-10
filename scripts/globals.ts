import fs from "fs";

import * as components from "../packages/components";

const globalComponents = Object.keys(components)
  .map(key => `    ${key}: typeof import("./lib")["${key}"]`)
  .join(";\n");

const globalDTS = `declare module "vue" {
  export interface GlobalComponents {
${globalComponents};
  }
}

export {};
`;

fs.writeFileSync("global.d.ts", globalDTS);
