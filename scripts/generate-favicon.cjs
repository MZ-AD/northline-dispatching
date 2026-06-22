const fs = require("fs");
const { execSync } = require("child_process");
const pngToIco = require("png-to-ico").default;

execSync(
  "npx --yes sharp-cli resize 32 32 --input src/app/icon.svg --output public/favicon-32.png",
  { stdio: "inherit" }
);

pngToIco("public/favicon-32.png")
  .then((buffer) => {
    fs.writeFileSync("public/favicon.ico", buffer);
    fs.writeFileSync("src/app/favicon.ico", buffer);
    console.log("favicon.ico written:", buffer.length, "bytes");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
