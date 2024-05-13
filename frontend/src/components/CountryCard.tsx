import { useRouter } from 'next/router';
import React from 'react';
import { URL } from '@/config';
import { Paper, Typography } from '@mui/material';

export type CountryType = {
  code: string;
  name: string;
  emoji: string;
  continent: ContinentType | null;
};

export type ContinentType = {
  name: string;
};

export const CountryCard = ({ country }) => {
  const router = useRouter();

  const displayCountryDetails = async () => {
    router.push(`${URL}/countries/${country.code}`);
  };

  return (
    <Paper
      sx={{ padding: '10px', margin: '5px' }}
      onClick={displayCountryDetails}
    >
      <Typography>{country.name}</Typography>
      <Typography>{country.emoji}</Typography>
    </Paper>
  );
};
