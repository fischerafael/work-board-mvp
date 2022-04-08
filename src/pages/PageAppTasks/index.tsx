import { Avatar, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import { Board } from "../../components/Board";
import { SideBar } from "../../components/SideBar";
import { useTasksState } from "../../store/tasks";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const PageAppTasks = () => {
  const { tasks, handleRemoveTask, isLoading } = useTasksState();

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
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id!}
                duration={task.duration}
                task={task.task}
                category={task.category}
                isLoading={isLoading}
                onRemove={() => handleRemoveTask(task.id?.toString()!)}
              />
            );
          })}
        </VStack>
      </VStack>
      {/* <Board /> */}
    </Flex>
  );
};

interface TaskProps {
  duration: number;
  task: string;
  category: string;
  id: number;
  onRemove: () => Promise<void>;
  isLoading: boolean;
}

const Task = ({ duration, task, category, onRemove, isLoading }: TaskProps) => {
  const height = `${duration * 125}px`;

  return (
    <HStack w="full" justify="space-between" h={height} bg="gray.800">
      <VStack h="full" w="4" bg="cyan.300" />

      <HStack
        _hover={{ bg: "gray.700" }}
        cursor="pointer"
        w="full"
        h="full"
        justify="space-between"
        align="flex-start"
        px="4"
        py="1"
      >
        <Text fontSize="xs">
          {duration}h - {task}
        </Text>
      </HStack>

      <Button
        size="xs"
        h="full"
        borderRadius="0"
        colorScheme="cyan"
        variant="ghost"
        onClick={onRemove}
        isLoading={isLoading}
      >
        Remove
      </Button>
    </HStack>
  );
};
