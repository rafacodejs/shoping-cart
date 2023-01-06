import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@mui/material/Drawer';
import { LinearProgress } from '@mui/material';
import Grid from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Wrapper } from './App.styles';

//Types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  const handleAddCart = (clickedItem: CartItemType) => null;
  const handleRemoveCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return <div>Hola</div>;
};

export { App };
