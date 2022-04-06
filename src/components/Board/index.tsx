import { HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export const Board = () => {
  return (
    <SimpleGrid columns={5} w="full" bg="transparent" p="4" gap="4">
      <VStack
        w="full"
        h="full"
        bg="white"
        style={{ outline: `solid 0.5px #E2E8F0` }}
      >
        <HStack w="full" bg="blue.500" color="white" p="4">
          <Text>Monday</Text>
        </HStack>
      </VStack>

      <VStack
        w="full"
        h="full"
        bg="white"
        style={{ outline: `solid 0.5px #E2E8F0` }}
      >
        <Text>Hi</Text>
      </VStack>

      <VStack
        w="full"
        h="full"
        bg="white"
        style={{ outline: `solid 0.5px #E2E8F0` }}
      >
        <Text>Hi</Text>
      </VStack>
    </SimpleGrid>
  );
};
