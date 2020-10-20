const $ = document.querySelector.bind(document);
const parser = new DOMParser();
const trace = (message = "message") => console.trace(message);

function parseHTMLString(HTMLString) {
  const node = parser.parseFromString(HTMLString, "text/html").getRootNode().body.firstChild;

  return node;
}

export { $, trace, parseHTMLString };
