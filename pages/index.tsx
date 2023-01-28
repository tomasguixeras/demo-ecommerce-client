import { useEffect } from "react";
import {
  Center,
  Heading,
  Stack,
  useColorMode,
  useTheme,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import Layout from "../components/layout/layout";
import BestSellingProductsCard from "../components/landing/bestSellingProductsCard";
import SomeCategories from "../components/landing/someCategories";
import AboutUsLanding from "../components/landing/aboutUsLanding";
import StepsForBuy from "../components/landing/stepsForBuy";
import NavBar from "../components/navBar/navBar";
import MySwiper from "../components/landing/mySwiper";
import PaymentMethods from "../components/landing/paymentMethods";
import ReviewsOfUsers from "../components/landing/reviewsOfUsers";
import Footer2 from "../components/footer/largeFooter";
import { fetchAllProducts } from "../features/guest/Products/actionsProductsGuest";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.productsGuest.products
  );
  const loading = useSelector(
    (state: RootState) => state.productsGuest.loading
  );
  const bestSeelingProducts = products.slice(0, 5);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <Layout title="Demo-Ecommerce">
      <Stack direction="column" spacing="12">
        <NavBar />
        <Center>
          <MySwiper products={products} />
        </Center>
        <Center>
          <AboutUsLanding />
        </Center>
        <Center>
          <Stack direction="column" width="80%">
            <Heading as="h1" size="xl" textAlign="center">
              Best selling products
            </Heading>
            <Stack direction="row" spacing="6">
              {bestSeelingProducts.length > 0 &&
                bestSeelingProducts.map((products: any) => (
                  <BestSellingProductsCard
                    id={products.id}
                    image={products && products.image}
                    heading={products.model}
                    text={products.description}
                  />
                ))}
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
        <Footer2 />
      </Stack>
    </Layout>
  );
}
