const nameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

const blogPosts = [];

function handleSubmit(event) {
    event.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;
    if (!name || !title || !content) {
        window.alert('Form cannot be left blank');
        return;
    }
    const newPost = {
        author: name,
        title: title,
        content: content
    };
    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    window.location.href = 'blog.html';
}

function loadStorage() {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (!storedPosts) {
        return;
    }
    for (post of storedPosts) {
        blogPosts.push(post);
    }
}

loadStorage();

submitButton.addEventListener('click', handleSubmit);