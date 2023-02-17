import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  uri: "https://gateway.thegraph.com/api/8ac224d39eb1ddbf3c1b42fbc500b80d/subgraphs/id/FB5V6Jb5EheGmgctfV9FV82Wz6CD87Mm7AbyTiGYUcss",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={apolloClient}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ApolloProvider>
);
