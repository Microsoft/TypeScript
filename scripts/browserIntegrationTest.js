// @ts-check
const chalk = require("chalk");
const { join } = require("path");
const { readFileSync } = require("fs");
const { spawn } = require("child_process");

// Turning this on will leave the Chromium browser open, giving you the
// chance to open up the web inspector.
const debugging = false;

(async () => {
  const playwright = await getPlaywright();
  for (const browserType of ["chromium", "firefox", "webkit"]) {
    const browser = await playwright[browserType].launch({ headless: !debugging, dumpio: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const errorCaught = err => {
        console.error(chalk.red("There was an error running built/typescript.js in " + browserType));
        console.log(err.toString());
        process.exitCode = 1;
    };

    page.on("error", errorCaught);
    page.on("pageerror", errorCaught);
    page.on("console", log => console[log._type](log._text));

    await page.setContent(`
    <html>
    <script>${readFileSync(join("built", "local", "typescript.js"), "utf8")}</script>
    </html>
    `);

    if (!debugging) {
        await browser.close();
    }
    else {
        console.log("Not closing the browser, you'll need to exit the process in your terminal manually");
    }
    console.log(`${browserType} :+1:`)
  }
})();

process.on("unhandledRejection", (/** @type {any}*/ err) => {
    if (err) {
        console.error(err.stack || err.message);
    }
    process.exit(1);
});

function getPlaywright({
    version = "0.12.1",
    stdio = true
} = {}) {
    return new Promise((resolve, reject) => {
        try {
            // eslint-disable-next-line import/no-extraneous-dependencies
            resolve(require("playwright"));
        }
        catch (_) {
            spawn("npm", `install --no-save --no-package-lock playwright@${version}`.split(" "), { stdio: stdio ? "inherit" : "ignore" })
            .on("exit", code => {
                if (code === 0) {
                    // eslint-disable-next-line import/no-extraneous-dependencies
                    resolve(require("playwright"));
                }
                else {
                    reject(new Error(`'npm install' exited with code ${code}`));
                }
            });
        }
    });
}
