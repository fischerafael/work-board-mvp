import { Avatar, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import { Board } from "../../components/Board";
import { SideBar } from "../../components/SideBar";
import { useTasksState } from "../../store/tasks";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const PageAppTasks = () => {
  const { tasks } = useTasksState();

  return (
    <Flex bg="gray.900" w="full" h="100vh" color="white">
      <SideBar />
      <VStack w="full" px="8">
        <HStack h="10vh" w="full" justify="space-between">
          <Avatar bg="cyan.300" size="sm" name="Rafael Fischer" />
          <Button
            colorScheme="cyan"
            onClick={() => handleNavigateTo("/app/tasks/task")}
          >
            Add Task
          </Button>
        </HStack>

        <VStack w="full" spacing="4">
          <Task />
          <Task />
          <Task />
        </VStack>
      </VStack>
      {/* <Board /> */}
    </Flex>
  );
};

const Task = () => {
  return (
    <HStack w="full" justify="space-between" h={"60px"} bg="gray.800">
      <VStack h="full" w="4" bg="cyan.300" />

      <HStack
        _hover={{ bg: "gray.700" }}
        cursor="pointer"
        w="full"
        h="full"
        justify="space-between"
      >
        <Text>1h - Task</Text>
      </HStack>

      <Button h="full" borderRadius="0" colorScheme="cyan" variant="ghost">
        Remove
      </Button>
    </HStack>
  );
};
