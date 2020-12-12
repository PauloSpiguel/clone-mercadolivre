import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationRow,
  ReputationThermometer,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>Centenário do Sul, Paraná</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>562</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver os dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
