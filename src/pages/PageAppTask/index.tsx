import { Avatar, Button, Flex, HStack, VStack } from "@chakra-ui/react";

import { InputNumber } from "../../components/InputNumber";
import { InputSelect } from "../../components/InputSelect";
import { InputText } from "../../components/InputText";
import { SideBar } from "../../components/SideBar";
import { CATEGORY_OPTIONS } from "../../data";
import { handleNavigateTo } from "../../utils/handleNavigateTo";
import { useTaskState } from "../../store/task";

export const PageAppTask = () => {
  const { task, setTask, handleCreateTask, isDisabled, isLoading } =
    useTaskState();

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

        <VStack maxW="container.md" w="full" p="8" bg="white" shadow="md">
          <InputText
            value={task.task}
            onChange={(e) => setTask({ ...task, task: e.target.value })}
            label="Task"
          />
          <HStack w="full">
            <InputText
              label="Date"
              type="date"
              value={task.date}
              onChange={(e) => setTask({ ...task, date: e.target.value })}
            />
            <InputNumber
              label="Duration"
              step={0.25}
              min={0}
              max={8}
              value={task.duration}
              onChange={(value) => setTask({ ...task, duration: +value })}
            />
            <InputSelect
              label="Category"
              options={CATEGORY_OPTIONS}
              value={task.category}
              onChange={(e) => setTask({ ...task, category: e.target.value })}
            />
          </HStack>

          <HStack w="full">
            <InputNumber
              label="Pessimistic Estimative"
              step={0.25}
              min={0}
              max={8}
            />
            <InputNumber
              label="Optimistic Estimative"
              step={0.25}
              min={0}
              max={8}
            />
            <InputNumber
              label="Realistic Estimative"
              step={0.25}
              min={0}
              max={8}
            />
          </HStack>

          <HStack w="full" justify="flex-end">
            <Button
              isLoading={isLoading}
              isDisabled={isDisabled}
              onClick={handleCreateTask}
              colorScheme="cyan"
            >
              Add Task
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};
