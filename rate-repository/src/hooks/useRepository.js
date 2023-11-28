import { useQuery } from "@apollo/client";
import { REPOSITORY_DETAILS } from "../graphql/queries";

const useRepository = ({ id, first }) => {
  //   console.log({ id, first });
  const { data, loading, fetchMore, refetch } = useQuery(REPOSITORY_DETAILS, {
    variables: { id, first },
    fetchPolicy: "cache-and-network",
  });
  //   console.log(data);

  const handleFetchMore = () => {
    if (!loading && data?.repository.reviews.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data?.repository.reviews.pageInfo.endCursor,
          id,
          first,
        },
      });
    }
  };

  return {
    reviews: data?.repository.reviews,
    repository: data?.repository,
    loading,
    handleFetchMore,
    refetch,
  };
};

export default useRepository;
