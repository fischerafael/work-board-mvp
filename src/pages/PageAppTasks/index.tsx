import { Avatar, Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Board } from "../../components/Board";
import { SideBar } from "../../components/SideBar";

export const PageAppTasks = () => {
  const { push } = useRouter();

  const handleNavigateTo = (path: string) => {
    push(path);
  };
  return (
    <Flex bg="gray.50" h="100vh">
      <SideBar />
      <VStack w="full" px="8">
        <HStack h="10vh" w="full" justify="space-between">
          <Avatar size="sm" name="Rafael Fischer" />
          <Button onClick={() => handleNavigateTo("/app/tasks/task")}>
            Add Task
          </Button>
        </HStack>
      </VStack>
      {/* <Board /> */}
    </Flex>
  );
};
