import { Avatar, Button, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import { SideBar } from "../../components/SideBar";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const PageAppTask = () => {
  return (
    <Flex bg="gray.50" h="100vh">
      <SideBar />
      <VStack w="full" px="8">
        <HStack h="10vh" w="full" justify="space-between">
          <Avatar size="sm" name="Rafael Fischer" />
          <Button onClick={() => handleNavigateTo("/app/tasks")}>
            Back to Tasks
          </Button>
        </HStack>

        <VStack maxW="container.md" w="full">
          <Input placeholder="Date" />
          <Input placeholder="Task" />

          <HStack w="full">
            <Input placeholder="Pessimistic Estimative" />
            <Input placeholder="Optimistic Estimative" />
            <Input placeholder="Realistic Estimative" />
          </HStack>
          <Input placeholder="Duration" />
          <Input placeholder="Category" />
          <Input placeholder="Realistic Estimative" />
        </VStack>
      </VStack>
    </Flex>
  );
};
