import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { mutationAddCountry } from '@/graphql/mutationAddCountry';
import { queryAllCountries } from '@/graphql/queryAllCountries';
import { Button, Stack, TextField, TextareaAutosize } from '@mui/material';

type CountryFormData = {
  name: string;
  emoji: string;
  code: string;
};

export const CountryForm = () => {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [code, setCode] = useState('');

  const [doCreate, { loading: createLoading }] = useMutation(
    mutationAddCountry,
    {
      refetchQueries: [{ query: queryAllCountries }],
    }
  );

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: CountryFormData = {
      name,
      emoji,
      code,
    };

    try {
      const result = await doCreate({
        variables: {
          data: data,
        },
      });

      if (result.data?.addCountry) {
        setName('');
        setEmoji('');
        setCode('');
      }
    } catch (error) {
      console.error('Error adding country:', error);
    }
  };

  return (
    <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
      <form onSubmit={submitForm}>
        <TextField
          type='text'
          variant='outlined'
          value={name}
          onChange={(e) => setName(e.target.value)}
          label='Name'
          placeholder='Name'
        />
        <TextField
          type='text'
          variant='outlined'
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          label='Emoji'
          placeholder='Emoji'
        />
        <TextField
          type='text'
          variant='outlined'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder='Code'
        />
        <Button type='submit' disabled={createLoading} variant='contained'>
          Add
        </Button>
      </form>
    </Stack>
  );
};
