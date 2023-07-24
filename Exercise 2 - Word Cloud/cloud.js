console.log("Exercise 2 - Word Cloud");
document.addEventListener("DOMContentLoaded", function () {
    const para = document.getElementById("myParagraph").textContent;
  
    const words = para.toLowerCase().match(/\b\w+\b/g);
    const wordCount = {};
    for (const word of words) {
      wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
    }
  
    const sorted = Object.keys(wordCount).sort(
      (a, b) => wordCount[b] - wordCount[a]
    );
  
    const most = sorted.slice(0, 12);
  
    // Create the word cloud elements
    const worCont = document.getElementById("myWordCloud");
    worCont.innerHTML = ""; // Clear the container first
    for (let i = 0; i < most.length; i++) {
      const elWord = document.createElement("div");
      elWord.className = "word";
      elWord.textContent = most[i];
      elWord.style.fontSize = `${64 - i * 4}px`;
      worCont.appendChild(elWord);
    }
  });
  