import { HStack, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

interface Props {
  task: string;
  type: "development" | "design" | "meetings" | "other" | "";
  duration: number;
  onClick?: () => void;
}

export const Task = ({ task, type, duration, onClick }: Props) => {
  const [isHover, setHover] = useState(false);

  const taskDisplay = `${task.split("").slice(0, 25).join("")}...`;
  const displayOnHover = task;

  const display = isHover ? displayOnHover : taskDisplay;
  const height = isHover ? "full" : `${duration * 100}px`;

  const bgColors = {
    development: "blue.50",
    design: "purple.50",
    meetings: "pink.50",
    other: "red.50",
    [""]: "white",
  };

  return (
    <HStack
      w="full"
      bg={bgColors[type]}
      color="gray.600"
      px="2"
      py="1"
      h={height}
      justify="space-between"
      align="flex-start"
      style={{ outline: `solid 0.5px #E2E8F0` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text fontSize="xs">
        {`${duration}h`} - {display}
      </Text>
      <Icon
        _hover={{ cursor: "pointer", color: "red.600" }}
        onClick={onClick}
        w={4}
        h={4}
        as={HiOutlineTrash}
      />
    </HStack>
  );
};
