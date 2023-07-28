import { FC } from 'react';
import { styled } from '@/stitches.config';
import { PokemonData } from '@/pages/hooks/types';
import ResponsiveImage from '../../atoms/ResponsiveImage';

interface Props {
  pokemon: PokemonData;
}

const DetailsCard = styled('div', {
  defaultVariants: {
    size: 'large',
  },
  variants: {
    size: {
      large: {
        height: '450px',
        maxWidth: '300px',
        margin: '0 auto',
        background: '$mango',
        borderRadius: '$1 $1 $1 $1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        '& div': {
          backgroundColor: '$seafoamMid',
          height: '200px',
        },
      },
    },
  },
  '& ul': {
    padding: '$4',
    '& li': {
      padding: '$1',
    },
  },
});

const PokemonCardDetails: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsCard>
      <ResponsiveImage
        src={pokemon.sprites?.other['official-artwork']?.front_default}
        alt={`${pokemon.name} artwork`}
      />
      <ul>
        <li>
          <strong>Name:</strong>{' '}
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </li>
        <li>
          <strong>Type:</strong>{' '}
          {pokemon.types.map((type) => type.type.name).join(', ')}
        </li>
        <li>
          <strong>Stats:</strong>{' '}
          {pokemon.stats.map((stat) => stat.stat.name).join(', ')}
        </li>
        <li>
          <strong>Abilities:</strong>{' '}
          {pokemon.abilities
            .slice(0, 5)
            .map((ability) => ability.ability.name)
            .join(', ')}
        </li>
        <li>
          <strong>Some Moves:</strong>{' '}
          {pokemon.moves
            .slice(0, 5)
            .map((move) => move.move.name)
            .join(', ')}
        </li>
        <li>
          <p>
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name} `}
              target="_blank"
              rel="noopener noreferrer"
            >
              More details at bulbapedia
            </a>
          </p>
        </li>
      </ul>
    </DetailsCard>
  );
};

export default PokemonCardDetails;
