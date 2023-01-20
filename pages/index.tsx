import { useEffect } from "react";
import { Center, Heading, Skeleton, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import {
  fetchAllCategories,
  fetchAllProducts,
} from "../features/guest/guestSlice";
import Layout from "../components/layout/layout";
import MostSelledCard from "../components/landing/mostSelledCard";
import SomeCategories from "../components/landing/someCategories";
import AboutUsLanding from "../components/landing/aboutUsLanding";
import Footer from "../components/footer/footer";
import StepsForBuy from "../components/landing/stepsForBuy";
import NavBar from "../components/navBar/navBar";
import MySwiper from "../components/landing/mySwiper";
import PaymentMethods from "../components/landing/paymentMethods";
import ReviewsOfUsers from "../components/landing/reviewsOfUsers";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.guest.products);
  const loading = useSelector((state: RootState) => state.guest.loading);
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, [dispatch]);
  loading! && console.log(products);
  return (
    <Layout title="Demo-Ecommerce">
      <Stack direction="column" spacing="12">
        <NavBar />
        <Center>
          <MySwiper />
        </Center>
        <Center>
          <AboutUsLanding />
        </Center>
        <Center>
          <Stack direction="column">
            <Heading as="h1" size="xl" textAlign="center">
              Most selled products
            </Heading>
            <Stack direction="row" spacing="8">
              <MostSelledCard
                image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                heading="Living room Sofa"
                text="Excelente producto para relajarse y descansar mientras se codea un proyectito"
              />
              <MostSelledCard
                image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                heading="Living room Sofa"
                text="Excelente producto para relajarse y descansar mientras se codea un proyectito"
              />
              <MostSelledCard
                image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                heading="Living room Sofa"
                text="Excelente producto para relajarse y descansar mientras se codea un proyectito"
              />
              <MostSelledCard
                image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                heading="Living room Sofa"
                text="Excelente producto para relajarse y descansar mientras se codea un proyectito"
              />
            </Stack>
          </Stack>
        </Center>
        <Center>
          <StepsForBuy />
        </Center>
        <Center>
          <Stack
            direction="column"
            width="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h1" size="xl" textAlign="center">
              Some popular categories
            </Heading>
            <SomeCategories />
          </Stack>
        </Center>
        <Center>
          <PaymentMethods />
        </Center>
        <Center>
          <Heading as="h1" size="xl" textAlign="center">
            Some reviews from our clients
          </Heading>
        </Center>
        <Center>
          <ReviewsOfUsers />
        </Center>
        <Footer />
      </Stack>
    </Layout>
  );
}
