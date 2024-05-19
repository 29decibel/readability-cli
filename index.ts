import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

async function parse(url: string) {
  const textContent = await fetch(url).then((s) => s.text());
  var doc = new JSDOM(textContent, {
    url,
  });
  let reader = new Readability(doc.window.document);
  let article = reader.parse();
  return JSON.stringify(article);
}

const url = Bun.argv[2];
if (!url) {
  throw "Please pass url as the arg";
} else {
  const result = await parse(url);
  console.log(result);
}
