import { Button, IButtonProps, Text, useTheme } from 'native-base';

interface FilterProps extends IButtonProps {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: FilterProps) {
  const { colors } = useTheme();

  const colorType = type === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      flex={1}
      size="sm"
      bgColor="gray.600"
      borderColor={colorType}
      borderWidth={isActive ? 1 : 0}
      {...rest}
    >
      <Text
        color={isActive ? colorType : "gray.300"}
        fontSize="xs"
        textTransform="uppercase"
      >
        {title}
      </Text>
    </Button>
  );
}