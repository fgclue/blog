var articleTitle = document.getElementById("title");
var articleContent = document.getElementById("content");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

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
            articleContent.innerHTML = marked(markdown);
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

