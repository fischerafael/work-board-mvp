import { HStack, IconButton, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";

export const Board = () => {
  return (
    <SimpleGrid columns={5} w="full" bg="transparent" p="4" gap="4">
      <VStack
        w="full"
        h="full"
        bg="white"
        style={{ outline: `solid 0.5px #E2E8F0` }}
      >
        <HStack
          w="full"
          bg="gray.600"
          color="white"
          p="2"
          justify="space-between"
        >
          <Text>Monday</Text>

          <IconButton
            variant="ghost"
            icon={<HiOutlinePlus />}
            color="white"
            aria-label="Add Task"
            borderRadius="0"
            _hover={{ color: "gray.600", bg: "white" }}
          />
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
