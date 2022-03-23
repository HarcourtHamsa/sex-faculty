import {
  Flex,
  Box,
  Image,
  Text,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./card.module.scss";

import { Link } from "react-router-dom";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function ProductCard({ productObj }) {
  return (
    <Flex
      p={{ md: 5, base: 0 }}
      w={{ md: "full", base: "20" }}
      alignItems="center"
      justifyContent="center"
      className={styles.productCard}
      mb={{ base: -10, md: 0 }}
      _hover={{ cursor: "pointer" }}
    >
      <Link
        to={{
          pathname: `/product/${productObj.fields.summary}`,
          data: productObj,
        }}
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="md"
          borderWidth="1px"
          rounded="0"
          position="relative"
        >
          <Image
            src={productObj.fields.image.fields.file.url}
            alt={`Picture of ${productObj.fields.image.fields.file.title}`}
            rounded="0"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline"></Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Text
                fontWeight="semibold"
                as="p"
                // lineHeight="tight"
                fontSize="sm"
                lineHeight={4}
                isTruncated
                // textOverflow="ellipsis"
                width={"28"}
              >
                {productObj.fields.summary}
              </Text>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={data.rating} numReviews={data.numReviews} />
              <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  £
                </Box>
                {productObj.fields.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
}

export default ProductCard;
