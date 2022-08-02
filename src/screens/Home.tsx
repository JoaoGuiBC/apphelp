import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderData } from '../components/Order';

export function Home() {
  const [selectedStatus, setSelectedStatus] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderData[]>([
    
    {
      id: '321',
      patrimony: '46876216',
      when: '01/08/2022 ás 16:40',
      status: 'open',
    },
    {
      id: '123',
      patrimony: '61267864',
      when: '01/08/2022 ás 16:53',
      status: 'closed',
    },
    {
      id: '456',
      patrimony: '46876216',
      when: '01/08/2022 ás 16:40',
      status: 'closed',
    },
    {
      id: '654',
      patrimony: '61267864',
      when: '01/08/2022 ás 16:53',
      status: 'closed',
    },
    {
      id: '789',
      patrimony: '46876216',
      when: '01/08/2022 ás 16:40',
      status: 'open',
    },
    {
      id: '987',
      patrimony: '46876216',
      when: '01/08/2022 ás 16:40',
      status: 'open',
    },
  
  ]);

  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleNewOrder() {
    navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigate('details', { orderId });
  }

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

        <FlatList
          data={orders}
          keyExtractor={order => order.id}
          renderItem={({item}) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
          contentContainerStyle={{ paddingBottom: 56 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {selectedStatus === "open" ? "em andamento" : "finalizadas"}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}