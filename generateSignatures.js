var inlineCss = require("inline-css");
const pug = require("pug");
const fs = require("fs");

const api =
  "https://cdn.jsdelivr.net/gh/dominik2323/labona_email_signature@latest";

const compiledFunction = pug.compileFile("index.pug");

const html = compiledFunction({
  api: api,
});

writeHtmlAsFile(html, `index.html`);

function writeHtmlAsFile(html, fileName) {
  inlineCss(html, { url: `file://${__dirname}/` }).then((html) => {
    fs.writeFile(`export/${fileName}`, html, (err) => {
      if (err) console.log(err);
    });
  });
}
