import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { queryCountry } from '@/graphql/queryCountry'; // Import de votre requête GraphQL
import { Paper, Stack } from '@mui/material';

export default function CountryDetails() {
  const router = useRouter();
  const countryCode = router.query.id;

  console.log('coucou', countryCode);

  const { loading, error, data } = useQuery(queryCountry, {
    variables: {
      code: countryCode,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data ? data.country : null;

  return (
    <main className='main-content'>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Paper sx={{ padding: '10px', margin: '5px' }}>
          <p>{country.emoji}</p>
          <p>
            Name : {country.name} ({country.code})
          </p>

          {country.continent && country.continent.name && (
            <p>Continent : {country.continent.name}</p>
          )}
        </Paper>
      </Stack>
    </main>
  );
}
