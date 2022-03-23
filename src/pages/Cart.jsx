import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import {
  Text,
  Container,
  Grid,
  Box,
  SimpleGrid,
  Stack,
  Flex,
  Divider,
  Button,
  Alert,
} from "@chakra-ui/react";
import CheckoutCard from "../components/CheckoutCard";

// redux setup
import { connect } from "react-redux";
// import { addToCart } from "../ctx/actions";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

function Cart({ cart }) {
  const allItems = cart.map((item) => <CheckoutCard data={item} />);
  const ItemPrices = [];

  function getItemPricesFromCart() {
    cart.forEach((item) => {
      const { price } = item.fields;
      ItemPrices.push(price);
    });
  }

  function getTotal() {
    const initialValue = 0;
    const total = ItemPrices.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    return total;
  }

  React.useState(async () => {
    await getItemPricesFromCart();
  }, []);

  return (
    <div>
      <Navbar />

      <Container maxW={{ base: "100%", md: "6xl" }} h={"100vh"} my={5}>
        <Alert> Free Delivery within 1-2 weeks</Alert>

        <Grid
          templateColumns={{ base: "1fr", md: "3fr 1fr " }}
          w="inherit"
          gap={10}
          padding={0}
          mt={{ base: 10, md: 5 }}
          mx="auto"
        >
          <Box h="full">
            <SimpleGrid columns={4} spacing={10} mb={6}>
              <Text fontSize={{ base: "xx-small", md: "sm" }} fontWeight="bold">
                PRODUCT
              </Text>
              <Text fontSize={{ base: "xx-small", md: "sm" }} fontWeight="bold">
                QUANTITY
              </Text>
              <Text fontSize={{ base: "xx-small", md: "sm" }} fontWeight="bold">
                PRICE
              </Text>

              <p></p>
            </SimpleGrid>

            <Stack>{allItems}</Stack>
          </Box>
          <Box borderWidth="1px" p={6} h={"fit-content"} shadow="lg">
            <Flex justify="space-between">
              <Box>
                <Text>Total price:</Text>
                <Text>Discount:</Text>
                <Text>Coupon:</Text>
              </Box>
              <Box>
                {" "}
                <Text> £{getTotal()}</Text>
                <Text> £0</Text>
                <Text> £0</Text>
              </Box>
            </Flex>
            <Divider my={5} />

            <Flex justify="space-between">
              <Text>Total</Text>
              <Text fontSize="lg" fontWeight="bold">
                £{getTotal()}
              </Text>
            </Flex>

            <Button
              mt={5}
              w="full"
              as="a"
              href="/checkout"
              fontWeight="normal"
              colorScheme="green"
            >
              {" "}
              Checkout{" "}
            </Button>
          </Box>
        </Grid>
      </Container>
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(Cart);
