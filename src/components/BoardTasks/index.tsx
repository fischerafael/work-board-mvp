import { HStack, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { Task } from "../Task";

interface Props {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
}

export const BoardDayTasks = ({ day }: Props) => {
  return (
    <VStack
      w="full"
      h="object-fit"
      spacing="0"
      style={{ outline: `solid 0.5px #E2E8F0` }}
    >
      <HStack
        w="full"
        bg="gray.600"
        color="white"
        p="2"
        justify="space-between"
        h="object-fit"
      >
        <Text>{day}</Text>

        <IconButton
          variant="ghost"
          icon={<HiOutlinePlus />}
          color="white"
          aria-label="Add Task"
          borderRadius="0"
          _hover={{ color: "gray.600", bg: "white" }}
        />
      </HStack>

      <VStack w="full" spacing="0" h="800px">
        <Task
          type="development"
          duration={5}
          task="3656 - Design new page with authorities and stuff"
        />
        <Task
          type="design"
          duration={3}
          task="3656 - Design new page with authorities and stuff"
        />
        <Task
          type="other"
          duration={0.25}
          task="3656 - Design new page with authorities and stuff"
        />
      </VStack>
    </VStack>
  );
};
