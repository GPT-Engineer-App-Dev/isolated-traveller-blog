import { Container, Text, VStack, Box, SimpleGrid, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">isolated traveller</Heading>
          <Text fontSize="lg">travel seekers and adventure enthusiasts</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
          <Card>
            <CardHeader>
              <Heading size="md">World Encyclopedia</Heading>
            </CardHeader>
            <CardBody>
              <Text>Explore the world and learn about different places.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md">About Us</Heading>
            </CardHeader>
            <CardBody>
              <Text>Learn more about our mission and team.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md">Destinations</Heading>
            </CardHeader>
            <CardBody>
              <Text>Discover new travel destinations and adventures.</Text>
            </CardBody>
          </Card>
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