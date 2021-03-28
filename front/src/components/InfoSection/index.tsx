import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "src/globalStyles";
import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./styles";

export interface IInfoSectionProps {
  lightBg?: boolean;
  imgStart?: string;
  primary?: boolean;
  lightText?: boolean;
  lightTopLine?: boolean;
  lightTextDesc?: boolean;
  topLine?: string;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  start?: string;
  img?: any;
  alt?: string;
}

function InfoSection({
  primary,
  lightBg,
  imgStart,
  lightText,
  lightTopLine,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  start,
  img,
  alt,
}: IInfoSectionProps) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
