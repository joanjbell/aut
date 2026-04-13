const POSTS = [
  {
    title: "Evening Fragment",
    text: "A short piece about light and absence.",
    tag: "Poetry"
  },
  {
    title: "Studio Note 01",
    text: "Thinking through repetition in language.",
    tag: "Writing"
  },
  {
    title: "Draft Memory",
    text: "An unfinished sequence of images and phrases.",
    tag: "Process"
  }
];

const container = document.getElementById("cms-posts");

POSTS.forEach(post => {
  const div = document.createElement("div");
  div.className = "cms-card hover-lift";

  div.innerHTML = `
    <div class="cms-tag">${post.tag}</div>
    <h3>${post.title}</h3>
    <p>${post.text}</p>
  `;

  container.appendChild(div);
});