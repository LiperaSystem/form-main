import styled, { keyframes, css } from 'styled-components';

interface StyledBurgerProps {
  open: boolean;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;


const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const StyledBurger = styled.button<StyledBurgerProps>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 2rem;
    background: '#5c5c5c';
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const CallToAction = styled.button`
  width: 11rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #F7B843;
  border-radius: 0.5rem;
  color: #383736;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;

  &:hover {
    transition: 0.3s;
    transform: translateX(5px);
    /* background-color: #140152; */
  }
`;

export const MenuButton = styled(CallToAction)`
  background-color: transparent;
  border: 2px solid rgba(99, 88, 224, .4);
  justify-content: center;
  height: auto;
  width: 7rem;
  color: #fff;

  &:hover {
    border-color: #22007C;
  }
`;


export const BurgerMenuContainer = styled.div`
  z-index: 9999;
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

interface BurgerIconProps {
  isOpen: boolean;
}

const shouldForwardProp = (prop: string) => prop !== 'isOpen';

export const BurgerIcon = styled.button.withConfig({shouldForwardProp})<BurgerIconProps>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  max-width: auto;
  position: relative;
  z-index: 5;

  span {
    width: 100%;
    height: 2px;
    background-color: #fe1c08;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
  }

  span:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }

  span:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  span:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(7.5px, -7.5px)' : 'none')};
  }
`;


export const Line = styled.span``;

export const MenuItems = styled.nav<BurgerIconProps>`
  background-color: #fbf8f2;
  color: #faf8f8 !important;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

  ${({ isOpen }) =>
    isOpen &&
    css`
      animation: ${slideIn} 0.3s linear;
    `}

  ${({ isOpen }) =>
  !isOpen &&
  css`
    animation: ${slideOut} 0.3s linear;
  `}

  /* Initial state for transform */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;



export const MenuBurger = styled.nav`
  color: red;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 2.5rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      background-color: #fbf8f2;
      width: 100%;
      padding: 1rem;
    }
  }

  li {
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: #5c5c5c;
      }
    }

    @media screen and (max-width: 768px) {
      a {
        font-size: 1.25rem;
      }
    }
  }
`;
