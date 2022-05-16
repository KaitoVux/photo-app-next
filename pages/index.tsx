import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header.component';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className="md:container md:mx-auto">
            <Head>
                <title>Photo App</title>
                <meta name="description" content="Created by KaitoVux" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
            </main>
        </div>
    );
};

export default Home;
