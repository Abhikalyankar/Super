import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/HomeScreen'); // first tab
    }, 50); // small delay to allow RootLayout to mount

    return () => clearTimeout(timeout);
  }, []);

  return null; // render nothing
}
