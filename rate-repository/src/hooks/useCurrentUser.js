import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useCurrentUser = ({ includeReviews, first }) => {
  const { data, loading, fetchMore, refetch } = useQuery(ME, {
    variables: { includeReviews, first },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    if (!loading && data?.me.reviews.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data?.me.reviews.pageInfo.endCursor,
          includeReviews,
          first,
        },
      });
    }
  };

  return {
    reviews: data?.me.reviews,
    loading,
    handleFetchMore,
    refetch,
  };
};

export default useCurrentUser;
