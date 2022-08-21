import { Header } from '@components/Header/header.component';
import { Slider } from '@components/Slider/slider.component';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ImageGrid } from '../components/ImageGrid';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Photo App</title>
                <meta name="description" content="Created by KaitoVux" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Slider></Slider>
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold underline">Hello Lem!</h1>
                <ImageGrid />
            </main>
        </React.Fragment>
    );
};

export default Home;
