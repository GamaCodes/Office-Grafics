import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/Headings.js";
import TeamIllustrationSrc from "../images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "../images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg text-black`;

const List = tw.li`my-5 lg:my-4 text-base xl:text-lg text-primary-500`;

const TwoColWithSteps = ({
  subheading = "Our Expertise",
  heading = <></>,
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  return (
    <div id="servicios">
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image
              src={imageSrc}
              imageBorder={imageBorder}
              imageShadow={imageShadow}
              imageRounded={imageRounded}
            />
            {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Subheading>{subheading}</Subheading>
              <Heading>{heading}</Heading>
              <Paragraph>
                Mucho le agradeceremos la oportunidad, de permitirnos formar
                parte del crecimiento de su empresa y sus proyectos a largo y
                corto plazo.
              </Paragraph>
              <Paragraph>Ofrecemos:</Paragraph>
              <ul>
                <List>- Entregas en 24 horas.</List>
                <List>
                  - Tr??mite de l??neas de Cr??dito hasta por $20,000.00 en no m??s
                  de 24 horas.
                </List>
                <List>
                  - Atenci??n personalizada de nuestro departamento de
                  Telemarketing.
                </List>
              </ul>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </div>
  );
};

export default TwoColWithSteps;
