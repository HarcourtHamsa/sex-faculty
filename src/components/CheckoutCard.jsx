import React from "react";
import { Text, Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";

function CheckoutCard({ data }) {
  return (
    <SimpleGrid columns={4} spacing={10} alignItems="center">
      <Box>
        <Box
          w={50}
          h={50}
          bg="gray.300"
          rounded="lg"
          backgroundImage={data.fields.image.fields.file.url}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
        />
      </Box>

      <Text>{data.quantity}</Text>

      <Flex gap={1}>
        <Box as="span" color={"gray.600"} fontSize="sm">
          £
        </Box>
        <Text>{data.fields.price}</Text>
      </Flex>

      <FiTrash2 size={20} />
    </SimpleGrid>
  );
}

export default CheckoutCard;
