import imageError from 'images/error.jpg';
import css from './ErrorRequest.module.css';

export const ErrorRequest = () => {
  return (
    <div className={css.imageErrorWrapper}>
      <img src={imageError} alt="Error occured" />
    </div>
  );
};
