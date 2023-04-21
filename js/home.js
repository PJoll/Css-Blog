const blogSection = document.querySelector('.blog-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach((blog) =>{
        if(blog.id != decodeURI(location.pathname.spllit("/").pop)){
            createBlog(blog);
        }
    })
})
const createBlog = (blog) => {
    const data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
    <img src="${data.bannerImage}" alt="banner" class="blog-image">
    <h1 class="blog-title">${data.title.substring(0,100)+'...'}</h1>
    <p class="blog-overvieww"> ${data.article.substring(0, 200)+'...'}</p>
    <a href="/${blog.id}" classs="btn dark">read</a>
    </div>
    `;
}