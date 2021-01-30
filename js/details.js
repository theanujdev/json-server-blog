const id = new URLSearchParams(window.location.search).get("id");
const blogContainer = document.getElementById("post");
const deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:6500/posts/" + id, {
    method: "DELETE",
  });
  if (!res.ok) {
    deleteBtn.innerText = "Something went wrong";
    return;
  }
  window.location.replace("./index.html");
});

const fetchBlog = async () => {
  const res = await fetch("http://localhost:6500/posts/" + id);
  if (!res.ok) {
    window.location.replace("./index.html");
  }
  const blog = await res.json();
  addBlog(blog);
};

const addBlog = (blog) => {
  const template = `
     <div id="blog-header" class="flex-group">
          <h1>${blog.title}</h1>
          <h5 id="author">By ${blog.author}</h5>
        </div>
        <p class="blog-para">
          ${blog.body}
        </p>
    `;
  blogContainer.innerHTML = template;
};

fetchBlog();
