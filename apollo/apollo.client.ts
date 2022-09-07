import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  return forward(operation);
});
const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, httpLink]),
});
