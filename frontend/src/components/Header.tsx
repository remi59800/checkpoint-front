import { Stack } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='header'>
      <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <h1>Checkpoint : frontend</h1>
        <Link style={{ color: 'white', marginBottom: '20px' }} href='/'>
          Countries
        </Link>
      </Stack>
    </header>
  );
}
