import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCharacter, getCharacterByQuery } from 'service/api';
import { CharacterList } from 'components/CharacterList/CharacterList';
import css from './Home.module.css';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!characterName) {
      getCharacter().then(({ results }) => {
        setCharacters(results);
      });
    } else {
      setSearchQuery(characterName);
      getCharacterByQuery(characterName).then(({ results }) => {
        setCharacters(results);
      });
    }
  }, [characterName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={css.formSection}>
      <form onSubmit={onFormSubmit}>
        <input
          className={css.inputSearch}
          name="name"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={css.btnSearch}>
          Search
        </button>
      </form>
      <CharacterList characters={characters} />
    </div>
  );
};
