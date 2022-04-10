import * as React from "react";
import Typed from "typed.js";
import ArticleLayout from "../components/shared/layouts/article-layout";
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Section from "../components/shared/section/section";
import Paragraph from "../components/shared/paragraph/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const NameStyledText = styled.span`
  text-transform: uppercase;
  font-family: suicideSquadFont;
  font-weight: normal;
`;
const CrossText = styled.span`
  text-transform: uppercase;
  font-family: suicideSquadFont;
  text-decoration: line-through;
  color: grey;
  font-size: 1.2em;
`;
const HighLightSkillText = styled.span`
  color: #c33;
  text-transform: uppercase;
  font-family: suicideSquadFont;
  font-size: 1.2rem;
  font-weight: 200;
  padding-left: 0.5rem;
`;
const ParagrphIndividualSection = styled.div`
  &:before {
    content: "-";
    margin-right: 0.5rem;
  }
`;

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default function Index() {
  // Introduction Section part of the webpage
  const introductionSectionRef = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  // load on component mount
  React.useEffect(() => {
    const options = {
      strings: [
        `Hey! What's poppin!`,
        `Welcome to my website! (σ'ω')σ `,
        `I am a Full Stack Software Engineer @ Uber, based in San Francisco`,
        `I believe <strong>LESS IS MORE</strong>, and, will try my best make things <strong>BETTER</strong> than I first met them!`,
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(introductionSectionRef.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <ArticleLayout>
      <Container maxW="container.md">
        <Box
          borderRadius="lg"
          mb={10}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          <span ref={introductionSectionRef} />
        </Box>

        {/* Name and Photo */}
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              <NameStyledText>mingjie wang</NameStyledText>
            </Heading>
            <NameStyledText>Software Engineer</NameStyledText>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/mingjie.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        {/* Introduction Section */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            <NameStyledText>why i am an awesome developer</NameStyledText>
          </Heading>
          <Paragraph>
            I have no <CrossText>fear</CrossText> because I play with
            <HighLightSkillText>python</HighLightSkillText>
            <br />
            I stay up <CrossText>all night</CrossText> because I use
            <HighLightSkillText>java</HighLightSkillText>
            <br />
            I have <CrossText>everything</CrossText> in mind because I write 
            <HighLightSkillText>javascript</HighLightSkillText>
            <br />
            I write code so <CrossText>fast</CrossText> because I use 
            <HighLightSkillText>express</HighLightSkillText>
            <br />
            I never <CrossText>compromise</CrossText> because I know
            <HighLightSkillText>angular</HighLightSkillText>
            <br />
            I act <CrossText>fast</CrossText> because I know
            <HighLightSkillText>react</HighLightSkillText>
            <br />
            I embrace <CrossText>everything</CrossText> because I know
            <HighLightSkillText>fusion</HighLightSkillText>
            <br />
            I always <CrossText>introspect</CrossText> because I know
            <HighLightSkillText>redux</HighLightSkillText>
            <br />
            I write no <CrossText>bugs</CrossText> because I told them to
            <HighLightSkillText>go</HighLightSkillText> away
            <br />
            My code is so <CrossText>sexy</CrossText> and it should be rated
            <HighLightSkillText>R</HighLightSkillText>
            <br />
            Most<HighLightSkillText>importantly</HighLightSkillText>, I get things <CrossText>done</CrossText>
          </Paragraph>
        </Section>

        {/* About Me Section */}
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            <NameStyledText>who am i</NameStyledText>
          </Heading>
          <Paragraph>
            <ParagrphIndividualSection>MingJie is currently working as a FullStack Software Engineer @Uber based in SF, USA. </ParagrphIndividualSection>
            <ParagrphIndividualSection>Graduated from RPI, NY. Majored in Computer Science & Minor in Environmental Science and Economics. </ParagrphIndividualSection>
            <ParagrphIndividualSection>He believes <NameStyledText>less is more</NameStyledText>, and you can tell that from both his work and outfit. </ParagrphIndividualSection>
            <ParagrphIndividualSection>When he is not working, Basketball Court || Nexus in HOTS (Heroes of the Storm) are the places you are likely to find him. </ParagrphIndividualSection>
            <ParagrphIndividualSection>Although most investments he made failed (e.g. PLTR&WISH, etc.), he is actively learning (mainly from YOUTUBE && REDDIT). Dreaming of becoming a <NameStyledText>BILLIONAIRE</NameStyledText> in ONE night. </ParagrphIndividualSection>
          </Paragraph>
        </Section>

        {/* About Me Section */}
        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            <NameStyledText>where can i find you</NameStyledText>
          </Heading>
          <Paragraph>
            <ParagrphIndividualSection>MingJie is currently working as a FullStack Software Engineer @Uber based in SF, USA. </ParagrphIndividualSection>
            <ParagrphIndividualSection>Graduated from RPI, NY. Majored in Computer Science & Minor in Environmental Science and Economics. </ParagrphIndividualSection>
            <ParagrphIndividualSection>He believes <NameStyledText>less is more</NameStyledText>, and you can tell that from both his work and outfit. </ParagrphIndividualSection>
            <ParagrphIndividualSection>When he is not working, Basketball Court || Nexus in HOTS (Heroes of the Storm) are the places you are likely to find him. </ParagrphIndividualSection>
            <ParagrphIndividualSection>Although most investments he made failed (e.g. PLTR&WISH, etc.), he is actively learning (mainly from YOUTUBE && REDDIT). Dreaming of becoming a <NameStyledText>BILLIONAIRE</NameStyledText> in ONE night. </ParagrphIndividualSection>
          </Paragraph>
        </Section>
      </Container>
    </ArticleLayout>
  );
}
