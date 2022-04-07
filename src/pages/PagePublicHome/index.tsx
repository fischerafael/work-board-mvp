import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

export const PagePublicHome = () => {
  return (
    <VStack bg="gray.900" w="full" minH="100vh" color="white" spacing="0">
      <HStack
        w="full"
        h="10vh"
        borderBottom="1px"
        borderColor="gray.700"
        justify="center"
      >
        <HStack px="8" w="full" maxW="container.lg" justify="space-between">
          <Text fontWeight="medium" color="cyan.300">
            RemoteWorkr
          </Text>

          <Button colorScheme="cyan">Log In</Button>
        </HStack>
      </HStack>

      <HStack
        w="full"
        maxW="container.lg"
        justify="space-between"
        height="70vh"
        spacing="8"
      >
        <VStack px="8" w="full" align="flex-start" justify="center" spacing="8">
          <Text color="cyan.300" fontSize="5xl" maxW="450px">
            A melhor maneira de gerenciar sua carreira remota.
          </Text>
          <Text fontSize="md" maxW="300px">
            O RemoteWorkr ajuda profissionais de tecnologia a gerenciar suas
            tarefas e criar timesheets com apenas um clique.
          </Text>
          <Button size="lg" colorScheme="cyan">
            Começar
          </Button>
        </VStack>

        <VStack w="full">
          <Image src="/developer-custom.svg" />
          <Text>O Melhor Amigo do Programador Remoto</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
