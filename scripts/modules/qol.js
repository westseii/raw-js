const $ = document.querySelector.bind(document);

const p = new DOMParser();
const getHTMLNodesFromString = (s) =>
  p.parseFromString(s, "text/html").getRootNode().body.firstChild;

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { $, getHTMLNodesFromString, getRandomIntInclusive };
