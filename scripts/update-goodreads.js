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

  // ✅ STRICT SCOPING TO AUTHOR BOOK TABLE
  $('#booksByAuthor tr').each((i, el) => {
    const titleEl = $(el).find('.bookTitle').first();
    const title = titleEl.text().trim();

    const cover = $(el).find('img').attr('src');

    const link = titleEl.attr('href');

    if (title && cover) {
      books.push({
        title,
        type: "Book",
        description: "Published work",
        cover,
        link: link ? `https://www.goodreads.com${link}` : "#"
      });
    }
  });
  books = [...new Map(books.map(b => [b.title, b])).values()];
  fs.writeFileSync('./data/books.json', JSON.stringify(books, null, 2));
  console.log('Books updated!');
}

scrape();