import Button from '@mui/material';
import React from 'react';
//Types
import { CartItemType } from '../App';
import { Wrapper } from './item.style';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);
