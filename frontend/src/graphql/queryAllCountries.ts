import { gql } from '@apollo/client';

export const queryAllCountries = gql`
  query allCountries {
    countries {
      name
      emoji
      code
    }
  }
`;
