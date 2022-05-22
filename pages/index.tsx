import { Header } from '@components/header.component';
import { Slider } from '@components/slider.component';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <Slider></Slider>
            <div className="container">
                <Head>
                    <title>Photo App</title>
                    <meta name="description" content="Created by KaitoVux" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <h1 className="text-3xl font-bold underline">Hello Lem!</h1>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Home;
