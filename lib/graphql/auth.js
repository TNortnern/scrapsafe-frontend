import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        email
        entries {
          id
          user_prediction
          actual_result
        }
      }
    }
  }
`;
