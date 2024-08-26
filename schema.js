export const typeDefs = `#graphql
    type Book {
        id: ID!
        name: String!
        authorName: String!
        reviewScore: Int!
        reviews: [Review!]
    }
    type Author {
        id: ID!
        name: String!
        books: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        book: Book!
        author: Author!
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
      addBook(book: AddBookInput!): Book
      deleteBook(id: ID!): [Book]
      updateBook(id: ID!, edits: EditBookInput!): Book
    }
    input AddBookInput {
      name: String!
      authorName: String!
    }
    input EditBookInput {
      name: String
      authorName: String
    }
`;
