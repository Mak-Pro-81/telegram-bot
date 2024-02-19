import styles from './style.module.scss';

export const Button = (props) => {
  return (
    <button {...props} className={`${styles.button} ${props.className}`}>
      App Button
    </button>
  );
};
