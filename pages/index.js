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
        <h1 className='text-6xl font-bold text-center'>
          Welcome to Conventional Commit Again
        </h1>
        <p className='p-3 text-base text-center'>this is feature 1</p>
        <p className='p-3 text-xl text-center'>this is feature 2</p>
        <p className='p-3 text-xl text-center'>this is feature 3</p>
      </main>
    </div>
  );
}
