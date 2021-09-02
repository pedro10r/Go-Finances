import React from 'react';
import { HightLightCard } from '../../components/HightLightCard';

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
} from './styles';

export function Dashboard() {
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
    </Container>
  );
}
