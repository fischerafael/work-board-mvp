import { Flex } from "@chakra-ui/react";
import { Board } from "../../components/Board";
import { SideBar } from "../../components/SideBar";

export const PageAppTimeSheets = () => {
  return (
    <Flex bg="gray.50" h="100vh">
      <SideBar />
      <Board />
    </Flex>
  );
};
