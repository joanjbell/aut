async function loadInstagramFeed() {
  const grid = document.getElementById("ig-grid");

  try {
    const res = await fetch("data/instagram.json");
    const posts = await res.json();

    posts.forEach(post => {
      const a = document.createElement("a");
      a.href = post.link;
      a.target = "_blank";
      a.className = "ig-item";

      a.innerHTML = `
        <img src="${post.image}" alt="Instagram post"/>
      `;

      grid.appendChild(a);
    });

  } catch (err) {
    console.error("Instagram feed failed to load", err);
  }
}

loadInstagramFeed();