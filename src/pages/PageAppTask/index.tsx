import { Avatar, Button, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import { InputNumber } from "../../components/InputNumber";
import { InputSelect } from "../../components/InputSelect";
import { InputText } from "../../components/InputText";
import { SideBar } from "../../components/SideBar";
import { CATEGORY_OPTIONS } from "../../data";
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

        <VStack maxW="container.md" w="full" p="8" bg="white" shadow="md">
          <InputText label="Task" />
          <HStack w="full">
            <InputText label="Date" type="date" />
            <InputNumber label="Duration" step={0.25} min={0} max={8} />
            <InputSelect label="Category" options={CATEGORY_OPTIONS} />
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
            <Button>Add Task</Button>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};
