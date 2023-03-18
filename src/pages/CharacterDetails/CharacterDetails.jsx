import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getCharacterById } from 'service/api';
import { ReactComponent as ArrowIcon } from 'images/arrow_back_24px.svg';
import css from './CharacterDetails.module.css';

export const CharacterDetails = () => {
  const location = useLocation();
  const { idDetails } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(idDetails).then(data => {
      setCharacter(data);
    });
  }, [idDetails]);
  if (!character) {
    return;
  }
  return (
    <section className={css.sectionCharacterDetails}>
      <Link to={location.state?.from ?? '/'} className={css.linkBack}>
        <ArrowIcon className={css.iconLinkBack} />
        <span className={css.textLinkBack}>GO BACK</span>
      </Link>
      <div className={css.characterInfo}>
        <img
          className={css.imagePoster}
          src={character.image}
          alt={character.name}
        />
        <div>
          <h2 className={css.titleItem}>{character.name}</h2>
          <p className={css.titleItem_text}>Informations</p>
        </div>
        <ul className={css.list}>
          <li className={css.listItem}>
            <h3 className={css.listItem_title}>Gender</h3>
            <p>{character.gender}</p>
          </li>
          <li className={css.listItem}>
            <h3 className={css.listItem_title}>Status</h3>
            <p>{character.status}</p>
          </li>
          <li className={css.listItem}>
            <h3 className={css.listItem_title}>Specie</h3>
            <p>{character.species}</p>
          </li>
          <li className={css.listItem}>
            <h3 className={css.listItem_title}>Origin</h3>
            <p>
              {character.origin.name === 'unknown'
                ? 'Unknown'
                : character.origin.name}
            </p>
          </li>
          <li className={css.listItem}>
            <h3 className={css.listItem_title}>Type</h3>
            <p>{character.type || 'Unknown'}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
