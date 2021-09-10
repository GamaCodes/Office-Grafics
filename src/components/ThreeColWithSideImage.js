import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { SectionDescription } from "./misc/Typography.js";

import defaultCardImage from "../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";

import Mision from "../images/mision.png";
import Vision from "../images/vision.png";
import Valores from "../images/valores.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-black`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-900 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const ThreeColWithSideImage = ({
  cards = null,
  heading = "Objetivo General",
  subheading = "¿Quiénes somos?",
  description = "Ofrecerle al cliente la mayor satisfacción, brindándole los mejores productos de la más alta calidad y tecnología en materiales. Con lo cual le permita tener la mayor confiabilidad y administración del recurso de la energía eléctrica, para así contribuir con una mejor calidad de vida en el desarrollo de nuestros clientes y la sociedad.",
}) => {
  const defaultCards = [
    {
      imageSrc: Vision,
      title: "Visión",
      description:
        "Nuestra visión es ser la mejor empresa en distribución y servicio en productos de papelería y sus servicios necesarios.",
    },
    {
      imageSrc: Mision,
      title: "Misión",
      description:
        "Ser líder en el mercado como proveedor y distribuidor al mejor precio sin perder la calidad que nuestros clientes requieren junto con el compromiso con nuestros clientes y nuestros empleados.",
    },
    {
      imageSrc: Valores,
      title: "Valores",
      description: "Honestidad | Lealtad | Compromiso | Responsabilidad",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <div id="quienes">
      <Container>
        <ThreeColumnContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
          <VerticalSpacer />
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
                <span className="imageContainer">
                  <img src={card.imageSrc || defaultCardImage} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card.title || "Fully Secure"}</span>
                  <p className="description">
                    {card.description ||
                      "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                  </p>
                </span>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
        <DecoratorBlob />
      </Container>
    </div>
  );
};

export default ThreeColWithSideImage;
