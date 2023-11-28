import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES_WITH_FILTER } from "../graphql/queries";

const useRepositories = ({
  orderBy,
  orderDirection,
  searchQuery,
  first,
  after,
}) => {
  const { data, loading, fetchMore, refetch } = useQuery(
    GET_REPOSITORIES_WITH_FILTER,
    {
      variables: { orderBy, orderDirection, searchQuery, first, after },
      fetchPolicy: "cache-and-network",
    }
  );

  const handleFetchMore = () => {
    if (!loading && data?.repositories.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          orderBy,
          orderDirection,
          searchQuery,
          first,
        },
      });
    }
  };

  useEffect(() => {
    refetch({ orderBy, orderDirection, searchQuery, after, first });
  }, [orderBy, orderDirection, searchQuery, refetch, after, first]);

  return {
    repositories: data?.repositories,
    loading,
    handleFetchMore,
  };
};

export default useRepositories;
