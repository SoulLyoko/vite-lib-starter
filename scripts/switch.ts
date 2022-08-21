import type { VueVersion } from "./utils";

import { switchVueVersion } from "./utils";

const version = process.argv[2] as VueVersion;
switchVueVersion(version);
