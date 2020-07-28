import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useModal } from '../../hooks/modal';
import { useTheme } from '../../hooks/theme';

import {
  toggleCart,
  Store,
  CartItem as CartItemType,
  removeCartItem,
  clearCart,
} from '../../store';

import { currencyFormat } from '../../utils/helpers';

import Button from '../Button';

import {
  Container,
  CartHeader,
  CartItems,
  CartItem,
  ProductImage,
  EmptyCart,
  Checkout,
  Spacer,
  ClearCartButton,
  ModalContent,
  Prices,
} from './style';

type CartProps = {
  items: CartItemType[];
  total: number;
  isOpened: boolean;
};

const Cart: React.FC = () => {
  const { theme } = useTheme();
  const { show, RenderModal } = useModal();
  const dispatch = useDispatch();
  const { items, total, isOpened } = useSelector<Store, CartProps>((state) => {
    return {
      items: state.cart.items,
      total: state.cart.total,
      isOpened: state.cart.isOpened,
    };
  });

  const handleCheckoutButtonClick = useCallback(() => {
    dispatch(toggleCart(false));
    dispatch(clearCart());
    show();
  }, [dispatch, show]);

  return (
    <Container isOpened={isOpened}>
      <CartHeader>
        <h1>Seu carrinho</h1>
        <Button iconOnly onClick={() => dispatch(toggleCart(false))}>
          <theme.icons.close size={24} />
        </Button>
      </CartHeader>
      {items.length ? (
        <>
          <CartItems>
            <div className="cart-items-header">
              <strong>Produto</strong>
              <strong>Qtd</strong>
              <strong>Valor</strong>
              <strong>Remover</strong>
            </div>
            {items.map((cartItem) => (
              <CartItem key={cartItem.id}>
                <div>
                  <ProductImage>
                    <img src={cartItem.product.image} alt={cartItem.product.name} />
                  </ProductImage>
                  <span>{cartItem.product.name}</span>
                </div>
                <span>{cartItem.quantity}</span>
                <Prices>
                  {cartItem.product.discountPrice !== 0 ? (
                    <>
                      <span className="dashed-price">
                        {cartItem.product.formattedPrice}
                      </span>
                      <span className="price">
                        {cartItem.product.formattedDiscountPrice}
                      </span>
                    </>
                  ) : (
                    <span className="price">{cartItem.product.formattedPrice}</span>
                  )}
                </Prices>
                <Button small iconOnly onClick={() => dispatch(removeCartItem(cartItem))}>
                  <theme.icons.close size={18} />
                </Button>
              </CartItem>
            ))}
          </CartItems>
          <Spacer />
          <Checkout>
            <div>
              <span>Total:</span>
              <span>{currencyFormat(total)}</span>
            </div>

            <Button full onClick={handleCheckoutButtonClick}>
              Finalizar Compra
            </Button>

            <ClearCartButton onClick={() => dispatch(clearCart())}>
              Esvaziar Carrinho
            </ClearCartButton>
          </Checkout>
        </>
      ) : (
        <EmptyCart>
          <img src={theme.storePetPng} alt="Leva eu!" />
          <p>Seu carrinho está vazio, que tal me levar hoje?</p>
        </EmptyCart>
      )}

      <RenderModal>
        <ModalContent>
          <img src={theme.storePetPng} alt="Obrigado!" />
          <h1>Yuup!! Obrigado!</h1>
          <p>Você ganhou de volta R$ 10,00!</p>
        </ModalContent>
      </RenderModal>
    </Container>
  );
};

export default Cart;
