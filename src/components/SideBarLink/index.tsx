import NextLink from "next/link";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  label: string;
  href: string;
  icon: IconType;
}

export const SideBarLink = ({ label, href, icon }: Props) => {
  const { asPath } = useRouter();

  const [, page] = asPath.split("/").filter((el) => el !== "/" && el);
  const isActive = page === label.toLowerCase();

  return (
    <NextLink href={href}>
      <HStack
        cursor="pointer"
        transition="all 0.5s"
        w="full"
        justify="flex-start"
        color={isActive ? "blue.400" : "gray.400"}
        _hover={{ color: "gray.400" }}
      >
        <Icon w={4} h={4} as={icon} />
        <Text>{label}</Text>
      </HStack>
    </NextLink>
  );
};
