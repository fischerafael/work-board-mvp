import { Avatar, Button, Flex, HStack, VStack } from "@chakra-ui/react";
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
      </VStack>
    </Flex>
  );
};
