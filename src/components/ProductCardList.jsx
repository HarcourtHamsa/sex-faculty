import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import ProductCard from "./ProductCard";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "jt1vx79qk2uz",
  accessToken: "Yxj4veSFMr8op8sg8dl5Muyx-OYtqLf5sURzas3Iqgs",
});

function ProductCardList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    client
      .getEntries()
      .then((entry) => setProducts(entry.items))
  }, [products]);

  return (
    <SimpleGrid
      columns={{ base: 2, md: 3 }}
      w="inherit"
      gap={3}
      padding={0}
      mt={{ base: -10, md: 0 }}
      mx="auto"
    >
      {products.map((p) => (
        <ProductCard key={Math.random()} productObj={p} />
      ))}
    </SimpleGrid>
  );
}

export default ProductCardList;
