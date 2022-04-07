import {
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
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { Task } from "../Task";

interface Props {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
}

export const BoardDayTasks = ({ day }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalHeader>{day}</ModalHeader>
          <ModalCloseButton />
          <ModalBody as={VStack} w="full" px="4" py="8">
            <Input type="text" placeholder="Task" />

            <HStack w="full">
              <NumberInput w="full" step={0.25} min={0} max={8}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Select>
                <option disabled hidden value="select">
                  Select a Category
                </option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="meetings">Meetings</option>
                <option value="other">Other</option>
              </Select>
            </HStack>
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
          <Text>{day}</Text>

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
    </>
  );
};
