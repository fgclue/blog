var articleTitle = document.getElementById("title");
var articleContent = document.getElementById("article");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function parseMarkdown(markdown) {
    const regex = {
      heading: /^(#+) (.*)/gm,
      bold: /\*\*(.*)\*\*/gm,
      italic: /\*(.*)\*/gm,
      link: /\[(.*)\]\((.*)\)/gm,
      image: /!\[(.*)\]\((.*)\)/gm,
      ul: /^-\s(.*)/gm,
      ol: /^([0-9]+)\.\s(.*)/gm,
    };
  
    markdown = markdown
      .replace(regex.heading, (_, level, text) => `<h${level.length}>${text}</h${level.length}>`)
      .replace(regex.bold, '<strong>$1</strong>')
      .replace(regex.italic, '<em>$1</em>')
      .replace(regex.link, '<a href="$2">$1</a>')
      .replace(regex.image, '<img src="$2" alt="$1">')
      .replace(regex.ul, '<li>$1</li>')
      .replace(regex.ol, '<li>$2</li>');
  
    markdown = `<ul>${markdown}</ul>`;
    //markdown = markdown.replace(/<li>/gm, '<li>').replace(/<\/li>\s*<li>/gm, '</li><li>');
    markdown = markdown.replace(/<li>\s+/gm, '<li>\n');
    
    return markdown;
  }
  

if (id == 1) {
  fetch('/article/article.json')
    .then(response => response.json())
    .then(data => {
      const article = data.articles['1'];
      const title = article.title;
      const location = article.location;
      fetch(location)
        .then(response => response.text())
        .then(markdown => {
            const titleHtml = `<h1 articlepreview>${title}</h1>`;
            articleTitle.innerHTML = titleHtml;
            articleContent.innerHTML = parseMarkdown(markdown);
        });
    });
}


if (id == 2) {
  fetch('/article/article.json')
    .then(response => response.json())
    .then(data => {
      const article = data.articles['2'];
      const title = article.title;
      const location = article.location;
      fetch(location)
        .then(response => response.text())
        .then(markdown => {
            const titleHtml = `<h1 articlepreview>${title}</h1>`;
            articleTitle.innerHTML = titleHtml;
            articleContent.innerHTML = parseMarkdown(markdown);
        });
    });
}

/*
I have a JSON file called article.json with a table called articles. Inside that table there is a table called 1 and 2. Inside these tables there is a title and location tag. Title is the title to the blog post and location is pointed to "/articles/1.md" and "/articles/2.md". I want to fetch the id 1 and set the articleTitle to the title and articleContent to the content of the Markdown file. My JS code is `var articleTitle = document.getElementById("title");
var articleContent = document.getElementById("content");


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id == 1) {
    
}`
*/

