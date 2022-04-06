import { Text, VStack } from "@chakra-ui/react";
import { HiOutlineClipboardCheck, HiOutlineViewBoards } from "react-icons/hi";
import { SideBarLink } from "../SideBarLink";

export const SideBar = () => {
  return (
    <VStack
      bg="white"
      w="250px"
      px="8"
      h="full"
      style={{ outline: `solid 0.5px #E2E8F0` }}
      spacing="0"
    >
      <VStack w="full" justify="center" h="10vh" align="flex-start">
        <Text fontWeight="bold" fontSize="2xl" color="gray.600">
          Task Board
        </Text>
      </VStack>

      <VStack w="full" h="full" spacing="4">
        <SideBarLink
          icon={HiOutlineClipboardCheck}
          href="/app/tasks"
          label="Tasks"
        />

        <SideBarLink
          icon={HiOutlineViewBoards}
          href="/app/timesheets"
          label="Timesheets"
        />
      </VStack>
    </VStack>
  );
};
