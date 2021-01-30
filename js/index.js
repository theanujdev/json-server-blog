const blogsContainer = document.getElementById("blogs-container");

const fetchBlog = async () => {
  const res = await fetch("http://localhost:6500/posts");
  if (!res.ok) {
    return;
  }
  const blogs = await res.json();

  blogs.forEach((blog) => {
    addBlog(blog);
  });
};

const addBlog = (blog) => {
  const template = `
     <div class="card">
        <h3>- ${blog.title}</h3>
        <p class="body">
          ${blog.body}
        </p>
        <div class="flex-group">
          <a href="./details.html?id=${blog.id}">Read More...</a>
          <h5 class="author">By ${blog.author}</h5>
        </div>
      </div>      
    `;
  blogsContainer.innerHTML += template;
};

fetchBlog();
