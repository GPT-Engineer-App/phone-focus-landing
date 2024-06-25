import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaPhone, FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to PhoneSaaS</Heading>
          <Text fontSize="lg">Revolutionizing the way you manage your phone services.</Text>
        </Box>
        
        <Image src="/images/phone-illustration.png" alt="Phone Illustration" boxSize="300px" objectFit="cover" />

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Why Choose Us?</Heading>
          <VStack spacing={4}>
            <Flex align="center">
              <FaCheckCircle size="24px" />
              <Text ml={2}>Seamless Integration</Text>
            </Flex>
            <Flex align="center">
              <FaCheckCircle size="24px" />
              <Text ml={2}>24/7 Support</Text>
            </Flex>
            <Flex align="center">
              <FaCheckCircle size="24px" />
              <Text ml={2}>Affordable Pricing</Text>
            </Flex>
          </VStack>
        </Box>

        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;