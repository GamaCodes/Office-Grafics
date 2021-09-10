import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import { Container, ContentWithPaddingXl } from "./misc/Layouts.js";
import productosOffice from "../images/productos.svg";
import { ReactComponent as ArrowLeftIcon } from "../images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../images/arrow-right-3-icon.svg";

const Row = tw.div`flex flex-col md:flex-row-reverse justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:pr-12 lg:pr-16 md:order-first`
    : tw`md:pl-12 lg:pl-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const Subheading = tw(SubheadingBase)`text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-left leading-tight`;
const Description = tw.p`mt-6 text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-900`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-4/5 mt-10 text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-start mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;

const TestimonialHeading = tw.div`mt-4 text-xl font-bold text-primary-500`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

const TwoColumnWithImageAndRating = ({
  imageSrc = productosOffice,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "Productos",
  heading = "Nuestros Productos",
  description = "En OFFICE GRAFICS, solo nos gusta ofrecer productos de la más alta calidad. Por eso nos hemos dado a la tarea, de tener para ti más de 6000 productos que superen tus expectativas de calidad.",
  textOnLeft = false,
  productos = [
    {
      heading: "Oficina",
      description: "Todo lo que Necesita para su Oficina, Mayoreo y Menudeo.",
      p1: "Folders",
      p2: "Carpetas",
      p3: "Notas",
      p4: "Papelería en General",
      p5: "Calculadoras",
    },
    {
      heading: "Escritura",
      description: "Materiales para Escritura.",
      p1: "Bolígrafos",
      p2: "Lápices",
      p3: "Portaminas",
      p4: "Resaltadores",
      p5: "Marcadores",
    },
    {
      heading: "Escolares",
      description:
        "Las Mejores Marcas y los Mejores Precios en Útiles Escolares.",
      p1: "Mochilas",
      p2: "Libretas",
      p3: "Colores",
      p4: "Juegos de Geometría",
      p5: "Pinturas",
    },
    {
      heading: "Consumibles",
      description: "Marcas como HP, Lexmark y EPSON.",
      p1: "Cartuchos Tinta",
      p2: "Cartuchos Toner",
      p3: "Papel para Impresión",
      p4: "Papel para Calculadora",
      p5: "Piezas para reparación",
    },
    {
      heading: "Mercería",
      description: "Materiales para Elaboración de Manualidades.",
      p1: "Hilos",
      p2: "Listón Seda y papel",
      p3: "Pegamentos",
      p4: "Botones y Figuras Decorativas",
      p5: "Tijeras",
    },
  ],
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div id="productos">
      <Container>
        <ContentWithPaddingXl>
          <Row>
            <ImageColumn>
              <Image
                src={imageSrc}
                imageBorder={imageBorder}
                imageShadow={imageShadow}
                imageRounded={imageRounded}
              />
            </ImageColumn>
            <TextColumn textOnLeft={textOnLeft}>
              <Subheading>{subheading}</Subheading>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <TestimonialSlider arrows={false} ref={setSliderRef}>
                {productos.map((producto, index) => (
                  <Testimonial key={index}>
                    <TestimonialHeading>{producto.heading}</TestimonialHeading>
                    <Quote>{producto.description}</Quote>
                    <ul>
                      <li>{producto.p1}</li>
                      <li>{producto.p2}</li>
                      <li>{producto.p3}</li>
                      <li>{producto.p4}</li>
                      <li>{producto.p5}</li>
                    </ul>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </Testimonial>
                ))}
              </TestimonialSlider>
            </TextColumn>
          </Row>
        </ContentWithPaddingXl>
      </Container>
    </div>
  );
};

export default TwoColumnWithImageAndRating;
