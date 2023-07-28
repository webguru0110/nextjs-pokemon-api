import useOnClickOutside from '@/pages/hooks/useOnClickOutSide';
import { styled } from '@stitches/react';
import React, { FC, useRef, useState } from 'react';

interface Props {
  searchResults: Array<string | object>;
  showSearchResults: boolean;
}

const StyledUl = styled('ul', {
  maxHeight: '390px',
  display: 'none',
  overflow: 'scroll',
  position: 'absolute',
  width: '60%',
  top: '60px',
  paddingLeft: '3rem',
  variants: {
    show: {
      true: {
        display: 'block',
      },
    },
  },
  '& li': {
    borderBottom: '#004368 solid 2px',
    borderRight: '#004368 solid 2px',
    borderLeft: '#004368 solid 2px',
    padding: '0.25rem',
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

const SearchResults: FC<Props> = ({ searchResults, showSearchResults }) => {
  return (
    <StyledUl show={showSearchResults}>
      {(searchResults as string[]).map((result) => {
        return <li key={result}>{result}</li>;
      })}
    </StyledUl>
  );
};

export default SearchResults;
