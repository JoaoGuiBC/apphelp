import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

interface HeaderProps extends StyledProps {
  title: string;
}

export function Header({ title, ...rest }: HeaderProps) {
  const { colors } = useTheme();

  return (
    <HStack 
      position="relative"
      w="full"
      justifyContent="space-between"
      alignItems="center"
      pb={6}
      pt={12}
      bg="gra.600"
    >
      <IconButton icon={<CaretLeft color={colors.gray[200]} size={24} />} />

      <Heading flex={1} ml={-10} color="gray.100" textAlign="center" fontSize="lg">
        {title}
      </Heading>
    </HStack>
  );
}