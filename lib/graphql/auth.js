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

export const REGISTER = gql`
  mutation($name: String!, $username: String!, $email: String!, $password: String!) {
    register(input: { name: $name, username: $username, email: $email, password: $password }) {
      jwt
      user {
        id
        name
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
