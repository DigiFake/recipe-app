import {
  Input,
  Select,
  Center,
  Heading,
  Box,
  Text,
  Image,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../utils/data';

export const RecipeListPage = ({ onRecipeClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dietFilter, setDietFilter] = useState('');

  const filteredHits = data.hits.filter((hit) => {
    const matchesSearch = hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiet =
      dietFilter === '' || hit.recipe.healthLabels.includes(dietFilter);
    return matchesSearch && matchesDiet;
  });

  return (
    <Center flexDir="column" p={6}>
      <Heading mb={8} fontSize="3xl" textAlign="center" color="teal.600">
        Discover Delicious Recipes
      </Heading>

      {/* Search and Filter */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        mb={8}
        w="100%"
        maxW="900px"
      >
        <Input
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          flex={2}
          focusBorderColor="teal.400"
          bg="white"
        />
        <Select
          placeholder="Filter by diet"
          value={dietFilter}
          onChange={(e) => setDietFilter(e.target.value)}
          flex={1}
          bg="white"
          focusBorderColor="teal.400"
        >
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Pescetarian">Pescetarian</option>
        </Select>
      </Flex>

      {/* Recipe Grid */}
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={6}
        w="100%"
        maxW="1200px"
      >
        {filteredHits.map((hit, index) => (
          <Box
            key={index}
            p={4}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.2s ease"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            cursor="pointer"
            onClick={() => onRecipeClick(hit.recipe)}
          >
            <Image
              src={hit.recipe.image}
              alt={hit.recipe.label}
              borderRadius="md"
              mb={4}
              objectFit="cover"
              h="200px"
              w="100%"
            />
            <Heading size="md" color="teal.600" mb={2}>
              {hit.recipe.label}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Meal Type: {hit.recipe.mealType || 'Unknown'}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Dish Type: {hit.recipe.dishType || 'Unknown'}
            </Text>
          </Box>
        ))}
      </Grid>

      {/* No Results Fallback */}
      {filteredHits.length === 0 && (
        <Text fontSize="xl" color="gray.500" mt={8}>
          No recipes match your search.
        </Text>
      )}
    </Center>
  );
};
