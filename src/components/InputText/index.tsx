import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface InputTextProps extends InputProps {
  label: string;
  helperText?: string;
}

export const InputText = ({ label, helperText, ...props }: InputTextProps) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
