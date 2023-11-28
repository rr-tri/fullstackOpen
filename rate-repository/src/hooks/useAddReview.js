import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useAddReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const create = async ({ ownerName, rating, repositoryName, text }) => {
    const review = {
      ownerName,
      rating: parseInt(rating),
      repositoryName,
      text,
    };
    try {
      const { data } = await mutate({ variables: { review } });

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return [create, result];
};

export default useAddReview;
