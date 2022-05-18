import fs from "fs";
import { execSync } from "child_process";
import { prompt } from "enquirer";

async function main() {
  console.log("Choicing version...");
  const { release } = await prompt<{ release: string }>({
    type: "select",
    name: "release",
    message: "Select release type",
    choices: ["patch", "minor", "major", "custom"]
  });
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const [major, minor, patch] = pkg.version.split(".");
  switch (release) {
    case "patch":
      pkg.version = [major, minor, Number(patch) + 1].join(".");
      break;
    case "minor":
      pkg.version = [major, Number(minor) + 1, 0].join(".");
      break;
    case "major":
      pkg.version = [Number(major) + 1, 0, 0].join(".");
      break;
    default:
      {
        const { version } = await prompt<{ version: string }>({
          type: "input",
          name: "version",
          message: "Enter custom version"
        });
        pkg.version = version;
      }
      break;
  }

  console.log("Releasing v" + pkg.version + "...");
  fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

  console.log("Generating changelog...");
  execSync("yarn changelog");

  console.log("Committing changes...");
  execSync("git add package.json");
  execSync("git add CHANGELOG.md");
  execSync(`git commit -m "chore: release v${pkg.version}"`);
  execSync(`git tag v${pkg.version}`);
  execSync(`git push`);
  execSync(`git push origin --tags v${pkg.version}`);
}

main();
