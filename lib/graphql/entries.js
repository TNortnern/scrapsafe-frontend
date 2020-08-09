import { gql } from "@apollo/client";

export const CREATE_ENTRY = gql`
  mutation($name: String!, $type: String!, $user_prediction: String!, $user: ID!, $image: String!) {
    createEntry(
      input: { data: { name: $name, type: $type, user_prediction: $user_prediction, user: $user, image: $image } }
    ) {
      entry {
        id
        user {
          id
        }
        name
        type
        user_prediction
        actual_result
        image
        createdAt
      }
    }
  }
`;
