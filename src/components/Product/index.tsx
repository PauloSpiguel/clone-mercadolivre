import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";
import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#"> Compartilhar</a>
        <a href="#"> Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantSection />
          <WarrantSection />
          <WarrantSection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantSection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Loren Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ante
      lectus. Pellentesque viverra, tortor non euismod semper, urna mauris
      volutpat nisl, in ornare justo purus id ex. Nulla massa libero,
      consectetur vitae dolor non, molestie euismod purus. Donec rutrum vel odio
      eget pulvinar. Maecenas at sodales arcu. Maecenas sit amet tincidunt diam.
      Ut eget odio ultricies, semper tellus id, pellentesque lorem. Sed
      elementum risus nisl. Proin sem risus, molestie et est nec, pellentesque
      iaculis nisi.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Nulla facilisi. Sed sit amet leo eget leo faucibus porttitor. Vivamus
      convallis tortor eu dapibus rutrum. Quisque in malesuada eros. Morbi massa
      eros, sollicitudin sit amet neque vitae, ultrices rutrum felis.
      Suspendisse id ligula at mi tincidunt vulputate. Nam sit amet laoreet
      quam, sit amet finibus nulla. In non finibus eros. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Pellentesque vehicula nisi velit.
    </p>
  </Description>
);

export default Product;
