import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";

const articles = [
  {
    title: "Global Markets Rally Amid Economic Optimism",
    summary: "Stocks around the world surged today as investors grew more optimistic about the economic recovery.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Giants Report Record Earnings",
    summary: "Leading technology companies have reported record earnings for the last quarter, driven by strong demand for digital services.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "New Policies Aim to Boost Small Businesses",
    summary: "Governments are introducing new policies to support small businesses in the wake of the pandemic.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market Watch: Key Indicators to Follow",
  "Opinion: The Future of Remote Work",
  "World News: Major Events This Week",
  "Business Insights: Emerging Trends",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={article.image} alt={article.title} />
                <Box p={4}>
                  <Heading as="h2" size="md" mb={2}>{article.title}</Heading>
                  <Text>{article.summary}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.100">
          <Heading as="h3" size="md" mb={4}>Trending Articles</Heading>
          <VStack spacing={2} align="stretch">
            {trendingArticles.map((title, index) => (
              <Box key={index} p={2} borderWidth="1px" borderRadius="md" bg="white">
                <Text>{title}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;