import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HightLightCard } from '../../components/HightLightCard';
import { TransactionCard } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightLightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export function Dashboard() {
  const data = [
    {
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "13/04/2021",
  },
    {
      type: "negative",
      title: "Hamburgeria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee"
      },
      date: "10/04/2021",
  },
    {
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag"
      },
      date: "06/04/2021",
  },
]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/50682093?v=4' }}/>

            <User>
              <UserGreeting>Ola,</UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HightLightCards>
        <HightLightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de Abril"
        />
        <HightLightCard
          type="down"
          title="Saídas"
          amount="R$ 1.159,00"
          lastTransaction="Ultima saída dia 13 de Abril"
        />
        <HightLightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de Abril"
        />
      </HightLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

      </Transactions>
    </Container>
  );
}
