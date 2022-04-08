import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
  SelectProps,
} from "@chakra-ui/react";

interface IOption {
  label: string;
  value: string | number;
}

interface InputSelectProps extends SelectProps {
  label: string;
  helperText?: string;
  options: IOption[];
}

export const InputSelect = ({
  label,
  helperText,
  options,
  ...props
}: InputSelectProps) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <Select {...props}>
        <option disabled hidden value="select">
          Select a Category
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
