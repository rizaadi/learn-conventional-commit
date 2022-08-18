import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto '>
        <h1 className='text-6xl text-center font-bold'>
          Welcome to Conventional Commit Again
        </h1>
      </main>
    </div>
  );
}
