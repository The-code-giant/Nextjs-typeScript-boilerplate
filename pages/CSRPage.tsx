import { gql, useQuery } from '@apollo/client';

const GET_CATS = gql`
  query GetCats {
    cats {
      id
      breed
    }
  }
`;

const MyPage = () => {
  const { loading, data } = useQuery(GET_CATS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default MyPage;
