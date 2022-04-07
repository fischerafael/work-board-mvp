import { HStack, IconButton, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import { BoardDayTasks } from "../BoardTasks";

export const Board = () => {
  return (
    <SimpleGrid
      columns={5}
      w="full"
      alignContent="flex-start"
      bg="transparent"
      p="4"
      gap="4"
    >
      <BoardDayTasks day="Monday" />
      <BoardDayTasks day="Tuesday" />
      <BoardDayTasks day="Wednesday" />
      <BoardDayTasks day="Thursday" />
      <BoardDayTasks day="Friday" />
    </SimpleGrid>
  );
};
