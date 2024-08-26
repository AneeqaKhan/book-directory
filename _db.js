let books = [
  {
    id: "1",
    name: "Pride and Prejudice",
    authorName: "Jane Austen",
    reviewScore: 9,
  },
  {
    id: "2",
    name: "A Tale of Two Cities",
    authorName: "Charles Dickens",
    reviewScore: 8,
  },
  {
    id: "3",
    name: "Little Women",
    authorName: "Louisa May Alcott",
    reviewScore: 8,
  },
  {
    id: "4",
    name: "Great Expectations",
    authorName: "Charles Dickens",
    reviewScore: 7,
  },
  {
    id: "5",
    name: "Persuasion",
    authorName: "Jane Austen",
    reviewScore: 5,
  },
  {
    id: "6",
    name: "East of Eden",
    authorName: "John Steinbeck",
    reviewScore: 9,
  },
];

let authors = [
  {
    id: "1",
    name: "Charles Dickens",
    books: ["Great Expectations", "A Tale of Two Cities"],
  },
  {
    id: "2",
    name: "John Steinbeck",
    books: ["East of Eden"],
  },
  {
    id: "3",
    name: "Jane Austen",
    books: ["Pride and Prejudice", "Persuasion"],
  },
  {
    id: "4",
    name: "Louisa May Alcott",
    books: ["Little Women"],
  },
];

let reviews = [
  {
    id: "1",
    rating: 9,
    content: "lorem ipsum",
    author_id: "3",
    book_id: "1",
  },
  {
    id: "2",
    rating: 8,
    content: "lorem ipsum",
    author_id: "1",
    book_id: "2",
  },
  {
    id: "3",
    rating: 8,
    content: "lorem ipsum",
    author_id: "4",
    book_id: "3",
  },
  {
    id: "4",
    rating: 7,
    content: "lorem ipsum",
    author_id: "1",
    book_id: "4",
  },
  {
    id: "5",
    rating: 5,
    content: "lorem ipsum",
    author_id: "3",
    book_id: "5",
  },
  {
    id: "6",
    rating: 9,
    content: "lorem ipsum",
    author_id: "2",
    book_id: "6",
  },
];

export default { books, authors, reviews };
