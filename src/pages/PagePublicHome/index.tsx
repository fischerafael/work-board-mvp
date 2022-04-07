import { Button, HStack, Text, VStack } from "@chakra-ui/react";

export const PagePublicHome = () => {
  return (
    <VStack bg="gray.900" w="full" minH="100vh" color="white" spacing="0">
      <HStack
        px="8"
        w="full"
        h="10vh"
        borderBottom="1px"
        borderColor="gray.700"
        justify="space-between"
      >
        <Text fontWeight="medium" color="cyan.300">
          RemoteWorkr
        </Text>

        <Button colorScheme="cyan">Log In</Button>
      </HStack>

      <HStack w="full" px="8" justify="space-between">
        <VStack
          w="full"
          align="flex-start"
          height="90vh"
          justify="center"
          spacing="8"
        >
          <Text color="cyan.300" fontSize="5xl" maxW="450px">
            O Melhor Amigo do Programador Remoto
          </Text>
          <Text fontSize="lg" maxW="300px">
            O RemotWorkr ajuda profissionais de tecnologia a gerenciar suas
            tarefas e criar timesheets com apenas um clique.
          </Text>
          <Button size="lg" colorScheme="cyan">
            Começar
          </Button>
        </VStack>

        <VStack w="full">
          <Text>O Melhor Amigo do Programador Remoto</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
