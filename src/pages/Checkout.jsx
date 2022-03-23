import React from "react";

import FloatingButton from "../components/FloatingButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { init, send } from "@emailjs/browser";

// import BitcoinLogo from "../assets/images/btc.png";

// User ID
// user_UY5jAYAIQkC14wSid54aB
// Access Token
// 04944cac581aa99f795438d007031900

import {
  Text,
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Alert,
  AlertIcon,
  useDisclosure,
  AlertDescription,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Checkout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  init("user_UY5jAYAIQkC14wSid54aB");

  function confirmTx() {
    send("service_0g8et9h", "template_wmij37v").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div>
      <Navbar />
      <Container
        maxW={{ base: "100%", md: "6xl" }}
        h={{ base: "fit-content" }}
        my={5}
      >
        <Text fontSize="2xl" mb={5}>
          Checkout Page.
        </Text>

        <Alert status="info" mb={20}>
          <AlertIcon />
          <AlertDescription>
            Due to the onging situation, our payment gatways are down. Please
            use the Cash App option in the payment section
          </AlertDescription>
        </Alert>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton bg="black" color="white">
                <Box flex="1" textAlign="left">
                  Enter Address Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flex={1}>
                <Stack spacing={4} w={"full"} maxW={"md"}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" w="full" />
                  </FormControl>
                  <FormControl id="country">
                    <FormLabel>Country</FormLabel>
                    <Input type="text" w="full" />
                  </FormControl>

                  <Flex gap={6}>
                    <FormControl id="country">
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" w="full" />
                    </FormControl>

                    <FormControl id="country">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" w="full" />
                    </FormControl>
                  </Flex>

                  <FormControl id="country">
                    <FormLabel>Address Line 1</FormLabel>
                    <Input type="text" w="full" />
                  </FormControl>

                  <FormControl id="country">
                    <FormLabel>Address Line 2</FormLabel>
                    <Input type="text" w="full" placeholder="(Optional)" />
                  </FormControl>

                  <FormControl id="country">
                    <FormLabel>City</FormLabel>
                    <Input type="text" w="full" />
                  </FormControl>

                  <FormControl id="country">
                    <FormLabel>State/Province/Region</FormLabel>
                    <Input type="text" w="full" />
                  </FormControl>

                  <FormControl id="country">
                    <FormLabel>Zip/Postal Code</FormLabel>
                    <Input type="text" w="full" />
                  </FormControl>

                  <FormControl id="country">
                    <FormLabel>Phone no</FormLabel>
                    <Input type="text" w="full" />
                  </FormControl>
                </Stack>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton bg="black" color="white">
                <Box flex="1" textAlign="left">
                  Payment Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>Choose payment option</Text>

              <Flex alignItems="flex-start" mt={6}>
                <Box _hover={{ cursor: "pointer" }} onClick={onOpen}>
                  <svg>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z"
                      fill="#00D54B"
                    ></path>
                  </svg>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton bg="black" color="white">
                <Box flex="1" textAlign="left">
                  Proof of Payment
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormControl id="country">
                <FormLabel>Upload proof of payment</FormLabel>
                <Input type="file" w="full" />
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button mt={5} w="fit-content" fontWeight="normal" colorScheme="green" onClick={() => confirmTx()}>
          Confirm Transaction
        </Button>
      </Container>
      <FloatingButton />
      <Footer />

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent rounded={0} w={{ base: "85%", md: "initial" }} m={"auto"}>
          <ModalHeader fontWeight="normal">Payment Gateway</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel fontSize="md">Cash App ID</FormLabel>
            <Input value="$persaudadelian51521" disabled />
          </ModalBody>

          <ModalFooter bg="gray.200" mt={10}>
            Please make payments to the Cash App ID above and send proof of
            payment
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Checkout;
