import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import SearchBar from '@/components/UI/molecules/SearchBar';

interface Props {
  cars?: [];
  children?: React.ReactNode;
}

const DefaultTemplate: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Pokemon List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBar />
      <main>{children}</main>
      <h1>This is footer</h1>
    </div>
  );
};

export default DefaultTemplate;
