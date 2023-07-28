import React, { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import Card from '../Card';
import PokemonList, { GenericItem } from '@/pages/hooks/types';
import { styled } from '@/stitches.config';

interface Props {
  list: InfiniteData<PokemonList>;
  titleKey: keyof GenericItem;
  imgSrcKey: keyof GenericItem;
  imgAltKey: keyof GenericItem;
  linkPathKey: keyof GenericItem;
}

const GridContainer = styled('div', {
  width: '$w100',
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax($cardWidth, 1fr))`,
  gap: '$6',
  justifyItems: 'center',
  padding: '0 $4',
});

const ItemList: FC<Props> = ({
  list,
  imgSrcKey,
  titleKey,
  imgAltKey,
  linkPathKey,
}) => {
  const flattenedData: GenericItem[] =
    list?.pages.flatMap((page) => page.results as GenericItem[]) || [];

  return (
    <GridContainer>
      {flattenedData.map((item) => (
        <Card
          key={item[titleKey]}
          size={'large'}
          imgSrc={item[imgSrcKey]}
          imgAlt={item[imgAltKey]}
          title={item[titleKey]}
          linkPath={item[linkPathKey]}
        />
      ))}
    </GridContainer>
  );
};

export default ItemList;
