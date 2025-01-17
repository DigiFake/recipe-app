import { Box, Heading, Image, Text, Button, Grid, Flex } from '@chakra-ui/react';

export const RecipePage = ({ recipe, onBackClick }) => {
  return (
    <Box p={6} maxW="800px" mx="auto" bg="white" borderRadius="lg" boxShadow="md">
      <Button
        onClick={onBackClick}
        colorScheme="teal"
        mb={6}
        variant="solid"
      >
        Back to overview
      </Button>
      <Heading mb={4} fontSize="2xl" color="teal.600">
        {recipe.label}
      </Heading>
      <Image
        src={recipe.image}
        alt={recipe.label}
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="300px"
        mb={6}
      />

      <Flex justify="space-between" mb={4}>
        <Text fontSize="sm" color="gray.600">
          <strong>Meal Type:</strong> {recipe.mealType || 'Unknown'}
        </Text>
        <Text fontSize="sm" color="gray.600">
          <strong>Dish Type:</strong> {recipe.dishType || 'Unknown'}
        </Text>
      </Flex>
      <Text fontSize="sm" color="gray.600" mb={4}>
        <strong>Total Time:</strong> {recipe.totalTime || 'Unknown'} minutes
      </Text>
      <Text fontSize="sm" color="gray.600" mb={4}>
        <strong>Cautions:</strong>{' '}
        {recipe.cautions?.length > 0 ? recipe.cautions.join(', ') : 'None'}
      </Text>

      <Heading size="md" color="teal.600" mb={4}>
        Ingredients
      </Heading>
      <Box bg="gray.50" p={4} borderRadius="md" mb={4}>
        {recipe.ingredients.map((ing, idx) => (
          <Text key={idx}>- {ing.text}</Text>
        ))}
      </Box>

      <Heading size="md" color="teal.600" mb={4}>
        Nutritional Information
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Text fontSize="sm" color="gray.600">
          Energy: {recipe.totalNutrients?.ENERC_KCAL?.quantity || 'Unknown'} kcal
        </Text>
        <Text fontSize="sm" color="gray.600">
          Protein: {recipe.totalNutrients?.PROCNT?.quantity || 'Unknown'} g
        </Text>
        <Text fontSize="sm" color="gray.600">
          Fat: {recipe.totalNutrients?.FAT?.quantity || 'Unknown'} g
        </Text>
        <Text fontSize="sm" color="gray.600">
          Carbs: {recipe.totalNutrients?.CHOCDF?.quantity || 'Unknown'} g
        </Text>
      </Grid>
    </Box>
  );
};
