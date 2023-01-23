import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';

import ShopCard from "../components/shop/shopCard";
import { fetchAllCategories, fetchAllProducts } from '../features/guest/guestSlice';

function Shop() {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.guest.products);
  const loading = useSelector((state: RootState) => state.guest.loading);
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, [dispatch]);
  console.log(products)
  return (
    <Box>
        <ShopCard />
    </Box>
  )
}

export default Shop