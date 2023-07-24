const most_frequent_words = function(paragraph) {
    // Split the paragraph into words.
    var words = paragraph.split(" ");
  
    // Create an object to store the number of times each word appears.
    var word_counts = {};
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word in word_counts) {
        word_counts[word] += 1;
      } else {
        word_counts[word] = 1;
      }
    }
  
    // Find the 5 words that appear the most often.
    var most_frequent_words = [];
    for (var word in word_counts) {
      most_frequent_words.push({
        count: word_counts[word],
        word: word
      });
    }
    most_frequent_words.sort(function(a, b) {
      return b.count - a.count;
    });
  
    // Return the 5 most frequent words.
    return most_frequent_words.slice(0, 6).map(function(word) {
      return word.word;
    });
  };
  
  const highlight_words = function(paragraph, words) {
    var highlighted_paragraph = "";
    for (var i = 0; i < paragraph.length; i++) {
      var char = paragraph[i];
      if (words.includes(char)) {
        highlighted_paragraph += "<mark style=background-color:'red '>" + char + "</mark>";
      } else {
        highlighted_paragraph += char;
      }
    }
    return highlighted_paragraph;
  };
  
  if (document.getElementById("myParagraph")) {
    var paragraph = document.getElementById("myParagraph").textContent;
    var words = most_frequent_words(paragraph);
    var highlighted_paragraph = highlight_words(paragraph, words);
  console.log(words)
    // Set the innerHTML of the paragraph element to the highlighted paragraph.
    document.getElementById("myParagraph").innerHTML = highlighted_paragraph;
  }
  