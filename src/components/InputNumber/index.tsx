import {
  FormControl,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/react";

interface InputNumberProps extends NumberInputProps {
  label: string;
  helperText?: string;
}

export const InputNumber = ({
  label,
  helperText,
  ...props
}: InputNumberProps) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <NumberInput w="full" {...props}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
