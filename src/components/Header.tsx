import { CaretLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';

interface HeaderProps extends StyledProps {
  title: string;
}

export function Header({ title, ...rest }: HeaderProps) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <HStack 
      w="full"
      justifyContent="space-between"
      alignItems="center"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
        zIndex={10}
      />

      <Heading flex={1} ml={-10} color="gray.100" textAlign="center" fontSize="lg">
        {title}
      </Heading>
    </HStack>
  );
}