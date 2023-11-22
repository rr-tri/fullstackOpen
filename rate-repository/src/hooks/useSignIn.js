import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";

import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE);
  // const authStorage = useContext(AuthStorageContext);
  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    try {
      const { data } = await mutate({ variables: { credentials } });
      await authStorage.setAccessToken(data?.authenticate.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return [signIn, result];
};

export default useSignIn;
