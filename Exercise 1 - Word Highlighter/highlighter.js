document.addEventListener("DOMContentLoaded",  () => {
  const para = document.getElementById("myParagraph").textContent;

  const text = para.toLowerCase().match(/\b\w+\b/g);
  const wordCount = {};
  for (const word of text) {
    wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
  }

  const sorted = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );

  const most = sorted.slice(0, 5);

  const highlight = para.replace(
    new RegExp(`\\b(${most.join("|")})\\b`, "gi"),
    (match) => `<span class="highlighted">${match}</span>`
  );

  const paraUnderline = highlight.replace(
    /\b[A-Z]\w*\b/g,
    (match) => `<span class="underline">${match}</span>`
  );

  const paraEL = document.getElementById("myParagraph");
  paraEL.innerHTML = paraUnderline;
});
