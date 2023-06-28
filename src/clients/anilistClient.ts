import { ApolloClient, InMemoryCache } from '@apollo/client';

const anilistClient = new ApolloClient({
  uri: 'https://graphql.anilist.co', // AniList GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default anilistClient;