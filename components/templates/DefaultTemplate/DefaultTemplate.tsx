import React, { FC, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/UI/molecules/Header';
import SearchBar from '@/components/UI/molecules/SearchBar';
import useDebounce from '@/pages/hooks/useDebounce';
import { useFindPokemonSuggestions } from '@/pages/hooks/usePokemon';

interface Props {
  children?: React.ReactNode;
}

const DefaultTemplate: FC<Props> = ({ children }): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const debounedSearchValue = useDebounce(searchValue, 300);

  const {
    data: pokemon,
    isFetching: pokemonIsFetching,
    // isLoading: pokemonIsLoading,
    // isError: pokemonIsError,
    isSuccess: pokemonIsSuccess,
  } = useFindPokemonSuggestions(debounedSearchValue);

  const handleSetSearchValue = (value: string) => {
    setSearchValue(value);
  };

  // const renderResult = () => {
  //   if (pokemonIsFetching) {
  //     return <div>Loading...</div>;
  //   }
  //   if (pokemonIsError) {
  //     return <div>not found</div>;
  //   }
  //   if (pokemonIsSuccess) {
  //     console.log({ pokemon });
  //     return <div>success</div>;
  //   }
  //   return <></>;
  // };

  return (
    <div>
      <Head>
        <title>Pokemon List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBar
        setSearchText={handleSetSearchValue}
        searchText={searchValue}
        searchResult={pokemon ?? []}
      />
      <main>{children}</main>
      <h1>This is footer</h1>
    </div>
  );
};

export default DefaultTemplate;
