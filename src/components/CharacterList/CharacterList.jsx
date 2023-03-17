import { Link, useLocation } from 'react-router-dom';
import css from './CharacterList.module.css';

export const CharacterList = ({ characters }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.characterList}>
        {characters.map(({ name, species, id, image }) => (
          <li className={css.characterItem} key={id}>
            <Link to={`/character/${id}`} state={{ from: location }}>
              <img className={css.imageItem} src={image} alt={name} />
              <div className={css.characterText}>
                <h2 className={css.titleItem}>{name}</h2>
                <p className={css.textItem}>{species}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
