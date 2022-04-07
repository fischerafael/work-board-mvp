import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";

export const PagePublicHome = () => {
  return (
    <VStack bg="gray.900" w="full" minH="100vh" color="white" spacing="0">
      <HStack
        w="full"
        h="10vh"
        borderBottom="1px"
        borderColor="gray.800"
        justify="center"
      >
        <HStack px="8" w="full" maxW="container.lg" justify="space-between">
          <Text fontWeight="medium" color="cyan.300">
            RemoteWorkr
          </Text>

          <Button size="sm" colorScheme="cyan">
            Log In
          </Button>
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
          <Text color="cyan.300" fontSize="5xl" maxW="400px" lineHeight="1.25">
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
        </VStack>
      </HStack>

      <HStack w="full" bg="gray.800" h="20vh" justify="center">
        <HStack px="8" w="full" maxW="container.lg" justify="space-between">
          <Text fontWeight="medium" color="cyan.300">
            RemoteWorkr
          </Text>

          <VStack>
            <a href="https://github.com/fischerafael" target="_blank">
              <Text>By Rafael Fischer</Text>
            </a>
          </VStack>
        </HStack>
      </HStack>
    </VStack>
  );
};
