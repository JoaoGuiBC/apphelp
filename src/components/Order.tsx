import { Box, Circle, HStack, IPressableProps, Pressable, Text, useTheme, VStack } from 'native-base';
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native';

export interface OrderData {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
}

interface OrderProps extends IPressableProps {
  data: OrderData;
}

export function Order({ data, ...rest }: OrderProps) {
  const { colors } = useTheme();

  const colorStatus = data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        mb={4}
        rounded="sm"
        bg="gray.600"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={colorStatus} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">Patrimônio {data.patrimony}</Text>

          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>{data.when}</Text>
          </HStack>
        </VStack>

        <Circle h={12} w={12} mr={5} bg="gray.500">
          {
            data.status === "closed"
            ? <CircleWavyCheck size={24} color={colorStatus} />
            : <Hourglass size={24} color={colorStatus} />
          }
        </Circle>
      </HStack>
    </Pressable>
  );
}