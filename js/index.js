const blogsContainer = document.getElementById("blogs-container");

const fetchBlog = async () => {
  const res = await fetch("http://localhost:6500/posts");
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
        <h5 class="author">By ${blog.author}</h5>
      </div>
    `;
  blogsContainer.innerHTML += template;
};

fetchBlog();
