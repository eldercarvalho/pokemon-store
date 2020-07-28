import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IPokemon } from '../../entities/Pokemon';

import { useTheme } from '../../hooks/theme';

import { Store, toggleCart, addToCart } from '../../store';

import Button from '../Button';

import { Container, Prices, Spacer } from './style';

interface CartProps {
  isOpened: boolean;
}

interface ProductProps {
  data: IPokemon;
  onAdd(data: IPokemon): void;
}

const Product: React.FC<ProductProps> = ({ data, onAdd }) => {
  const [addedTocart, setAddedToCart] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Adicionar');
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { isOpened } = useSelector<Store, CartProps>((state) => {
    return {
      isOpened: state.cart.isOpened,
    };
  });

  useEffect(() => {
    if (addToCart && isOpened) {
      setAddedToCart(false);
    }
  }, [addedTocart, isOpened]);

  const handleAdd = useCallback(
    (product: IPokemon) => {
      setAddedToCart(true);
      onAdd(product);
      setButtonText('Adicionado!');
      setTimeout(() => {
        setButtonText('Adicionar');
      }, 2000);
    },
    [onAdd],
  );

  const handleOpenCart = useCallback(() => {
    setAddedToCart(false);
    dispatch(toggleCart(true));
  }, [dispatch]);

  return (
    <Container>
      <img src={data.image} alt={data.name} />
      <h4>{data.name}</h4>
      <Prices>
        {data.discountPrice !== 0 ? (
          <>
            <span className="dashed-price">{data.formattedPrice}</span>
            <span className="price">{data.formattedDiscountPrice}</span>
          </>
        ) : (
          <span className="price">{data.formattedPrice}</span>
        )}
      </Prices>
      {addedTocart && !isOpened && (
        <Button small className="open-cart" onClick={() => handleOpenCart()}>
          Ver carrinho
        </Button>
      )}
      <Spacer />
      <Button className="add-button" variant="secondary" onClick={() => handleAdd(data)}>
        {buttonText === 'Adicionar' ? (
          <theme.icons.cart size={20} />
        ) : (
          <theme.icons.check size={20} />
        )}
        {buttonText}
      </Button>
    </Container>
  );
};

export default Product;
