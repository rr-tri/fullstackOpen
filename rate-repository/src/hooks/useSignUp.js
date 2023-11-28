import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const signUp = async ({ username, password }) => {
    const user = { username, password };
    try {
      const { data } = await mutate({ variables: { user } });
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return [signUp, result];
};

export default useSignUp;
