import { Box, Stack, Center, Skeleton, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import NavBar from "../components/navBar/navBar";
import { fetchProductById } from "../features/guest/guestSlice";
import Galery from "../components/detail/galery";
import InfoProduct from "../components/detail/infoProduct";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch: AppDispatch = useDispatch();
  const productDetail: any = useSelector(
    (state: RootState) => state.guest.productDetail
  );

  useEffect(() => {
    id && dispatch(fetchProductById(id));
  }, [dispatch, id]);
  return (
    <Stack>
      <NavBar />
      <Center>
        <Stack
          direction="row"
          height="50%"
          padding={6}
          width="80%"
          justifyContent="space-around"
        >
          {productDetail.length !== 0 && productDetail.id.toString() === id ? (
            <Galery image={productDetail.image} />
          ) : (
            <Stack direction="column">
              <Box>
                <Skeleton height="500px" width="500px" borderRadius={5} />
              </Box>
              <Stack direction="row">
                <Skeleton height="50px" width="50px" borderRadius={2} />
                <Skeleton height="50px" width="50px" borderRadius={2} />
                <Skeleton height="50px" width="50px" borderRadius={2} />
              </Stack>
            </Stack>
          )}
          {productDetail.length !== 0 && productDetail.id.toString() === id ? (
            <InfoProduct
              brand={productDetail.brand && productDetail.brand.name}
              model={productDetail.model}
              price={productDetail.price}
              quantity={productDetail.quantity}
              description={productDetail.description}
            />
          ) : (
            <Stack
              direction="column"
              width="40%"
              padding={10}
              spacing={5}
              borderStyle="solid"
              borderColor="blackAlpha.200"
              borderWidth={1}
              borderRadius={5}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Skeleton height="50px" width="40%" borderRadius={2} />

                <Skeleton height="50px" width="20%" borderRadius={2} />
              </Stack>
              <Skeleton height="50px" width="80%" borderRadius={2} />
              <Divider />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Skeleton height="50px" width="20%" borderRadius={2} />
                <Skeleton height="50px" width="20%" borderRadius={2} />
              </Stack>
              <Divider />
              <Stack direction="column">
                <Skeleton height="150px" width="100%" borderRadius={2} />
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="center">
                <Skeleton height="50px" width="50%" borderRadius={2} />
              </Stack>
            </Stack>
          )}
        </Stack>
      </Center>
    </Stack>
  );
}
