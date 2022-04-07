import {
  Button,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { Task } from "../Task";

interface Props {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
}

type Types = "development" | "design" | "meetings" | "other" | "";

interface ITask {
  task: string;
  type: Types;
  duration: number;
}

export const BoardDayTasks = ({ day }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [task, setTask] = useState<ITask>({
    task: "",
    type: "",
    duration: 0,
  });

  const [tasks, setTasks] = useState<ITask[]>([]);

  const totalHours = tasks?.reduce((acc, curr) => acc + curr.duration, 0);

  const isDisabled =
    !task.task || !task.type || !task.duration || task.duration === 0;

  const handleAddTask = () => {
    if (isDisabled) return;
    setTasks([...tasks, task]);
    setTask({ task: "", type: "", duration: 0 });
    onClose();
  };

  const handleRemoveTask = (taskIndex: number) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalHeader>{day}</ModalHeader>
          <ModalCloseButton />
          <ModalBody as={VStack} w="full" px="4" py="8">
            <Input
              value={task.task}
              onChange={(e) => setTask({ ...task, task: e.target.value })}
              type="text"
              placeholder="Task"
            />

            <HStack w="full">
              <NumberInput
                value={task.duration}
                onChange={(value) => setTask({ ...task, duration: +value })}
                w="full"
                step={0.25}
                min={0}
                max={8}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Select
                value={task.type}
                onChange={(e) =>
                  setTask({ ...task, type: e.target.value as Types })
                }
              >
                <option disabled hidden value="select">
                  Select a Category
                </option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="meetings">Meetings</option>
                <option value="other">Other</option>
              </Select>
            </HStack>

            <Button
              isDisabled={isDisabled}
              onClick={handleAddTask}
              bg="gray.600"
              color="white"
              w="full"
            >
              Add Task
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
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
          <Text>
            {day} ({totalHours}h)
          </Text>

          <IconButton
            variant="ghost"
            icon={<HiOutlinePlus />}
            color="white"
            aria-label="Add Task"
            borderRadius="0"
            _hover={{ color: "gray.600", bg: "white" }}
            onClick={onOpen}
          />
        </HStack>

        <VStack w="full" spacing="0" h="800px">
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                type={task.type as Types}
                duration={task.duration}
                task={task.task}
                onClick={() => handleRemoveTask(index)}
              />
            );
          })}
        </VStack>
      </VStack>
    </>
  );
};
