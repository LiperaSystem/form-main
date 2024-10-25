import { HeaderWrapper, Logo, Menu } from "./styles";
import logoImage from '../../assets/logo-lipera.png'
import BurgerMenu from "../Burger/Burger";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo><a href="https://lipera.com.br/"><img src={logoImage} alt="" /></a></Logo>
      <Menu className="desktop-menu">
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
      </Menu>
      <BurgerMenu />
    </HeaderWrapper>
  );
};

export default Header;
