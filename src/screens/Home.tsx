import { SignOut } from 'phosphor-react-native';
import { Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { useState } from 'react';

export function Home() {
  const [selectedStatus, setSelectedStatus] = useState<'open' | 'closed'>('open');

  const {colors} = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        w="full"
        bg="gray.600"
        pb={5}
        px={6}
        pt={12}
      >
        <Logo />

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
          _pressed={{ bg: "gray.500" }}  
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">
            Meus chamados
          </Heading>

          <Text color="gray.200">
            5
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type='open'
            title='em andamento'
            isActive={selectedStatus === 'open'}
            onPress={() => setSelectedStatus("open")}
          />
          <Filter
            type='closed'
            title='finalizado'
            isActive={selectedStatus === 'closed'}
            onPress={() => setSelectedStatus("closed")}
          />
        </HStack>
      </VStack>
    </VStack>
  );
}