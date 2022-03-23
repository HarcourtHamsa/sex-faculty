import React from "react";

import FloatingButton from "../components/FloatingButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// redux setup
import { connect } from "react-redux";
import { addToCart } from "../ctx/actions";

import {
  Text,
  Container,
  Grid,
  Box,
  Stack,
  Flex,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (val) => dispatch(addToCart(val)),
  };
};

function Product(props) {
  const { data } = props.location;
  const { addItemToCart } = props;
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div>
      <Navbar />
      <Container
        maxW={{ base: "100%", md: "6xl" }}
        h={{ md: "100vh", base: "fit-content" }}
        my={5}
        mb={20}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr " }}
          w="inherit"
          gap={10}
          padding={0}
          mt={{ base: 10, md: 5 }}
          mx="auto"
        >
          <Box h="full" p={{ md: 6, base: 0 }}>
            <Box
              w="full"
              h={{ md: "lg", base: "xs" }}
              bg="gray.300"
              rounded="0"
              backgroundImage={data.fields.image.fields.file.url}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
            />
          </Box>
          <Box h="full" p={{ md: 6, base: 0 }}>
            <Stack spacing={8}>
              <Text as="h3" lineHeight="8" mb={{ base: -5, md: -5 }}>
                {data.fields.summary}
              </Text>
              <Box fontSize="2xl">
                <Box as="span" color={"gray.600"} fontSize="lg">
                  £
                </Box>
                {data.fields.price}
              </Box>

              <Text lineHeight="8" color="gray.500">
                {data.fields.description}
              </Text>

              <Flex alignItems="center" gap={10}>
                <Text>Quantity:</Text>

                <NumberInput min={1} defaultValue={1}>
                  <NumberInputField
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper
                      onClick={(e) => setQuantity(quantity + 1)}
                    />
                    <NumberDecrementStepper
                      onClick={(e) => setQuantity(quantity - 1)}
                    />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>

              <Flex gap="1rem">
                <Box w={10} h={10} borderWidth={"1px"} rounded="xl"></Box>
                <Box w={10} h={10} borderWidth={"1px"} rounded="xl"></Box>
                <Box w={10} h={10} borderWidth={"1px"} rounded="xl"></Box>
              </Flex>

              <Button
                w="fit-content"
                fontWeight="normal"
                colorScheme="green"
                onClick={() => {
                  console.log(quantity);
                  addItemToCart({
                    quantity: 1,
                    ...data,
                  });
                }}
              >
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
      <FloatingButton />
      <Footer />
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Product);
