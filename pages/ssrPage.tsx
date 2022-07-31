import { gql } from '@apollo/client';
import { addApolloState, initializeApollo } from '../lib/apollo';

const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

const SSRPage = (props) => {
  return <div>{JSON.stringify(props.data)}</div>;
};

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo(null, ctx);

  const { data } = await apolloClient.query({
    query: GET_CATS,
  });

  return addApolloState(apolloClient, {
    props: {
      data,
    },
  });
}

export default SSRPage;
