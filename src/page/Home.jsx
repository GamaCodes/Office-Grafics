import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "../components/TwoColumnWithInput";
import Features from "../components/ThreeColWithSideImage";
import MainFeature from "../components/TwoColWithButton";
import FeatureWithSteps from "../components/TwoColWithSteps";
import Testimonial from "../components/TwoColumnWithImageAndRating";
import GetStarted from "../components/GetStarted";
import Footer from "../components/FiveColumnWithBackground";
import mapaTabasco from "../images/mapa.png";
import lateWork from "../images/late-work.svg";

const Home = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>¿Quiénes somos?</Subheading>}
        heading={
          <>
            Objetivo <HighlightedText>General.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Cobertura</Subheading>}
        imageSrc={mapaTabasco}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>Servicios</Subheading>}
        heading={
          <>
            Nuestros <HighlightedText>Servicios</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={lateWork}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Testimonial
        subheading={<Subheading>Productos</Subheading>}
        heading={
          <>
            Nuestros <HighlightedText>Productos.</HighlightedText>
          </>
        }
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Home;
