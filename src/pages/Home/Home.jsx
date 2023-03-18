import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCharacter, getCharacterByQuery } from 'service/api';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Loader } from 'components/Loader/Loader';
import RickAndMortyPicture from '../../images/rick_and_morty_inscription.png';
import css from './Home.module.css';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!characterName) {
      getCharacter().then(({ results }) => {
        setCharacters(results);
        setIsLoading(false);
      });
    } else {
      setSearchQuery(characterName);
      getCharacterByQuery(characterName).then(({ results }) => {
        setCharacters(results);
        setIsLoading(false);
      });
    }
  }, [characterName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={css.formSection}>
      <div className={css.formContainer}>
        <div className={css.imageWrapper}>
          <img
            className={css.imgPicture}
            src={RickAndMortyPicture}
            alt="Home inscription"
          />
        </div>
        <form className={css.formSearch} onSubmit={onFormSubmit}>
          <button type="submit" className={css.btnSearch}></button>
          <input
            className={css.inputSearch}
            placeholder="Filter by name..."
            name="name"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
        {isLoading ? <Loader /> : <CharacterList characters={characters} />}
      </div>
    </div>
  );
};
