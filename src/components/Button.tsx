import { Button as BaseButton, Heading, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <BaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="lg"
      _pressed={{ bg: 'green.800' }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">{title}</Heading>
    </BaseButton>
  );
}