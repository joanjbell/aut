const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'https://www.goodreads.com/author/show/18613685.J_Bell_Price';

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function scrape() {
  const html = await fetchHTML(URL);
  const $ = cheerio.load(html);

  const books = [];

  $('.bookTitle').each((i, el) => {
    const title = $(el).text().trim();

    const cover = $(el)
      .closest('tr')
      .find('img')
      .attr('src');

    if (title) {
      books.push({
        title,
        type: "Book",
        description: "From Goodreads",
        cover,
        link: "#"
      });
    }
  });

  fs.writeFileSync('./data/books.json', JSON.stringify(books, null, 2));
  console.log('Books updated!');
}

scrape();