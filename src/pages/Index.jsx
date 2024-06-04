import { Container, Text, VStack, Box, SimpleGrid, Card, CardHeader, CardBody, Heading, Flex, Link, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={6} w="full">
        <Flex justify="space-between" w="full" mb={10}>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" fontSize="lg" fontWeight="bold">Home</Link>
            <Link as={RouterLink} to="/destinations" fontSize="lg" fontWeight="bold">Destinations</Link>
            <Link as={RouterLink} to="/state-of-usa" fontSize="lg" fontWeight="bold">State of USA</Link>
            <Link as={RouterLink} to="/world-encyclopedia" fontSize="lg" fontWeight="bold">World Encyclopedia</Link>
          </HStack>
        </Flex>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>isolated traveller</Heading>
          <Text fontSize="lg" mb={10}>travel seekers and adventure enthusiasts</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card>
              <CardHeader>
                <Heading size="md">World Encyclopedia</Heading>
              </CardHeader>
              <CardBody>
                <Text>Explore the world and learn about different places.</Text>
              </CardBody>
            </Card>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card>
              <CardHeader>
                <Heading size="md">About Us</Heading>
              </CardHeader>
              <CardBody>
                <Text>Learn more about our mission and team.</Text>
              </CardBody>
            </Card>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card>
              <CardHeader>
                <Heading size="md">Destinations</Heading>
              </CardHeader>
              <CardBody>
                <Text>Discover new travel destinations and adventures.</Text>
              </CardBody>
            </Card>
          </MotionBox>
        </SimpleGrid>
        <Box w="full" pt={10}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="start">
            <Text>No recent posts available.</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;