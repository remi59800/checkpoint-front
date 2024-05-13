import React from 'react';
import { useQuery } from '@apollo/client';
import { queryAllCountries } from '@/graphql/queryAllCountries';
import { CountryCard } from './CountryCard';
import { CountryForm } from './CountryForm';
import { Stack } from '@mui/material';

export const Countries = () => {
  const { loading, error, data } = useQuery(queryAllCountries);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <CountryForm />
      <Stack
        flexDirection={'row'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {data.countries.map((country: any) => (
          <div key={country.name}>
            <CountryCard country={country} />
          </div>
        ))}
      </Stack>
    </>
  );
};
