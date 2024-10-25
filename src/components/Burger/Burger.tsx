import { FunctionComponent, useState } from 'react';
import { BurgerMenuContainer, BurgerIcon, Line, MenuItems } from './Burger.styled';
import { MenuBurger } from './Burger.styled';

const BurgerMenu: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BurgerMenuContainer>
      <BurgerIcon onClick={handleToggle} isOpen={isOpen}>
        <Line />
        <Line />
        <Line />
      </BurgerIcon>
      {isOpen && (
        <MenuItems isOpen={isOpen} className={isOpen ? 'close' : 'open'}>
          <MenuBurger className="desktop-menu">
            <ul>
              <li>
                <a href="https://lipera.com.br/#sobrenos">Sobre nós</a>
              </li>
              <li>
                <a href="http://lipera.com.br/#endereco">Endereço</a>
              </li>
              <li>
                <a href="http://lipera.com.br/#contato">Contato</a>
              </li>
              <li>
                <a href="http://lipera.com.br/#faq">FAQ</a>
              </li>
            </ul>
          </MenuBurger>
        </MenuItems>
      )}
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
