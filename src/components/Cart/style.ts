import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

interface CartProps {
  isOpened: boolean;
}

export const Container = styled.div<CartProps>`
  position: fixed;
  top: 60px;
  right: 0;
  width: 320px;
  height: calc(100% - 60px);
  background: #fff;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  overflow-y: auto;
  transition: transform 0.3s;
  transform: translateX(100%);

  ${(props) =>
    props.isOpened &&
    css`
      transform: translateX(0);
    `}
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;

  h1 {
    font-size: 3rem;
  }
`;

export const CartItems = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1.4rem;
    font-family: 'Lato';

    & + div {
      border-top: 1px solid #ccc;
    }

    &.cart-items-header {
      font-size: 1.6rem;
    }
  }
`;

const addCartItemAnimation = keyframes`
  from {
    right: 100px;
  }
  to {
    right: 0;
  }
`;

export const CartItem = styled(animated.div)`
  position: relative;
  animation: ${addCartItemAnimation} 0.5s forwards;

  div {
    max-width: 50px;
    text-align: center;
  }
`;

export const ProductImage = styled.div`
  width: 50px;
  height: 50px;
  position: relative;

  img {
    width: 50px;
  }
`;

export const Prices = styled.div`
  span {
    font-family: 'Lato';
    display: block;

    &.dashed-price {
      text-decoration: line-through;
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 280px;
  text-align: center;

  p {
    margin-top: 1.6rem;
    font-size: 2rem;
  }
`;

export const Checkout = styled.div`
  width: 100%;
  padding: 1.6rem 1.6rem 0;
  border-top: 1px solid #ccc;
  z-index: 1;
  background: #fff;

  div {
    font-family: 'Lato';
    display: flex;
    justify-content: space-between;
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const ClearCartButton = styled.button`
  width: 100%;
  font-family: 'Lato';
  font-size: 1.2rem;
  border: none;
  background: transparent;
  color: #333;
  margin-top: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const modalPetAnimation = keyframes`
  from {
    transform: rotateY(0);
  } 
  to {
    transform: rotateY(180deg);
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  padding: 2rem;

  img {
    width: 150px;
    margin-bottom: 1rem;
    animation: ${modalPetAnimation} 0s infinite;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Lato';
    font-size: 2rem;
  }
`;
