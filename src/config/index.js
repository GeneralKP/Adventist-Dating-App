import React from 'react';
import {View} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const ApolloProviderComponent = () => (
  <ApolloProvider client={client}>
    <View></View>
  </ApolloProvider>
);

export default ApolloProviderComponent;