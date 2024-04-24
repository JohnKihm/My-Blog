const mainEl = document.querySelector('main');
const backButton = document.querySelector('#back-button');

function buildBlog() {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (!storedPosts) {
        placeHolderText = document.createElement('h1');
        placeHolderText.setAttribute('class', 'place-holder')
        placeHolderText.textContent = 'Nothing to see here!'
        mainEl.appendChild(placeHolderText);
        return;
   }
   for (post of storedPosts) {
    const postEl = document.createElement('article');
    const titleEl = document.createElement('h2');
    const contentEl = document.createElement('p');
    const authorEl = document.createElement('h3');
    postEl.setAttribute('class', 'blog-post');
    titleEl.textContent = post.title;
    contentEl.textContent = post.content;
    authorEl.textContent = `Posted by: ${post.author}`;
    postEl.appendChild(titleEl);
    postEl.appendChild(contentEl);
    postEl.appendChild(authorEl);
    mainEl.appendChild(postEl);
   }
}

buildBlog();

backButton.addEventListener('click', function() {
    window.location.href = 'index.html'
})