var inlineCss = require("inline-css");
const pug = require("pug");
const fs = require("fs");

const api =
  "https://cdn.jsdelivr.net/gh/dominik2323/remes-signature@0b0f3554702c71fcdfc5d4f0b98128bf46708b45";

const compiledFunction = pug.compileFile("index.pug");

const html = compiledFunction({
  apiUrl: api,
});

writeHtmlAsFile(html, `index.html`);

function writeHtmlAsFile(html, fileName) {
  inlineCss(html, { url: `file://${__dirname}/` }).then((html) => {
    fs.writeFile(`export/${fileName}`, html, (err) => {
      if (err) console.log(err);
    });
  });
}
