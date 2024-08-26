import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    books() {
      return db.books;
    },
    book(_, args) {
      return db.books.find((book) => book.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Book: {
    reviews(parent) {
      return db.reviews.filter((r) => r.book_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    book(parent) {
      return db.books.find((b) => b.id === parent.book_id);
    },
  },
  Mutation: {
    deleteBook(_, args) {
      db.books = db.books.filter((g) => g.id !== args.id);
      return db.books;
    },
    addBook(_, args) {
        let book = {
            ...args.book,
            id: Math.floor(Math.random() * 10000).toString()
        }
        db.books.push(book)
        return book
    },
    updateBook(_, args) {
        db.books = db.books.map((b) => {
            if(b.id === args.id) {
                return {...b, ...args.edits}
            }
            return b
        })
        return db.books.find((b) => b.id === args.id)
    }
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
