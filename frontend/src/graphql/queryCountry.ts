import { gql } from '@apollo/client';

export const queryCountry = gql`
  query country($code: String!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;
