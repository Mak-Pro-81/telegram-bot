import { Button } from '../../UI/Button/Button';

import styles from './style.module.scss';

const Header = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <header>
      <Button onClick={onClose}>Close</Button>
      <span>{tg.initDataUnsafe?.user?.username}</span>
    </header>
  );
};

export default Header;
