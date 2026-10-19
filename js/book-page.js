/* Shared book-detail renderer. The bookshelf data is the source of truth. */
(async function loadBookPage() {
  const pageSlug = document.body.dataset.bookSlug || '';
  const titleNode = document.getElementById('book-title');
  const typeNode = document.getElementById('book-type');
  const descriptionNode = document.getElementById('book-description');
  const imageCard = document.getElementById('book-image-card');
  const imageNode = document.getElementById('book-image');
  const noteNode = document.getElementById('book-note');

  const titleFromSlug = value => value
    .replace(/-/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase());

  function showUnavailable(title, message) {
    document.body.classList.add('book-without-cover');
    document.title = `${title} | J. Bell Price`;
    titleNode.textContent = title;
    typeNode.textContent = 'Book';
    descriptionNode.textContent = '';
    imageCard.hidden = true;
    noteNode.textContent = message;
    noteNode.hidden = false;
  }

  try {
    const response = await fetch('../data/books.json');
    if (!response.ok) throw new Error('Book data could not be loaded.');
    const books = await response.json();
    if (!Array.isArray(books)) throw new Error('The bookshelf data is not in the expected format.');

    const book = books.find(entry => {
      const link = String(entry.link || '').split('/').pop().replace(/\.html$/i, '');
      return link === pageSlug;
    });

    if (!book) {
      showUnavailable(titleFromSlug(pageSlug), 'This title is not currently included in the bookshelf index.');
      return;
    }

    const title = book.title || titleFromSlug(pageSlug);
    document.title = `${title} | J. Bell Price`;
    titleNode.textContent = title;
    typeNode.textContent = book.type || 'Book';

    const description = String(book.description || '').trim();
    if (/^from goodreads$/i.test(description)) {
      descriptionNode.textContent = '';
      noteNode.textContent = description;
      noteNode.hidden = false;
    } else {
      descriptionNode.textContent = description;
      noteNode.hidden = true;
    }

    const imagePath = String(book.cover || book.spine || '').trim();
    if (imagePath) {
      imageNode.src = `../${imagePath.replace(/^\/+/, '')}`;
      imageNode.alt = `${title} cover`;
      imageCard.hidden = false;
    } else {
      document.body.classList.add('book-without-cover');
      imageCard.hidden = true;
    }
  } catch (error) {
    console.error(error);
    showUnavailable(titleFromSlug(pageSlug), 'Book details are temporarily unavailable. Return to the bookshelf to continue browsing.');
  }
})();
