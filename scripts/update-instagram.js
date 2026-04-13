import fetch from "node-fetch";
import fs from "fs";

const ACCESS_TOKEN = process.env.IG_TOKEN;

async function fetchInstagram() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(url);
  const data = await res.json();

  const posts = data.data.map(post => ({
    image: post.media_url,
    link: post.permalink
  }));

  fs.writeFileSync(
    "./data/instagram.json",
    JSON.stringify(posts, null, 2)
  );

  console.log("Instagram feed updated");
}

fetchInstagram();