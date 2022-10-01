import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  // IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/matrix.png'
import thumbTech from '../public/images/links/tech.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Singapore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lakshya Raikwal
          </Heading>
          <p>
            High-School Student | Digital Craftzman | Full-stack Developer
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/das.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Lakshya Raikwal is a passionate developer who has keen interest in programming and developing new things including AI. When he isn&apos;t glued to a computer screen, he either spends time researching for a new project idea or talk with his girlfriend.
          
          He is also an ambitious person who has a positive attitude and is full of determination to achieve whatever he puts his mind to. With extensive knowledge and 4 years of experience, he&apos;s been working on AI using Python with intermediate level of web development and beginner level of blockchain knowledge too!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Delhi, India.
        </BioSection>
        <BioSection>
          <BioYear>2008</BioYear>
          Did my primary schooling in India.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Flew to Singapore for Secondary education; got inspired to do programming and started my tech journey!
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          An amateur in Python / Web Development / Blockchain and an aspiring learner in the field of Technology.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 🤍
        </Heading>
        <Paragraph>
          Coding new projects, Gaming and Music, but my priority among these is my beloved girlfriend.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Lakshya123-cyber" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Lakshya123-cyber
              </Button>
            </Link>
          </ListItem>
           <ListItem>
            <Link href="https://instagram.com/titan1728" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @titan1728
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/lakshya-raikwal-670218193/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Lakshya Raikwal
              </Button>
            </Link>
          </ListItem>
          
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/watch?v=EJojZ_Y0WaM"
            title="ASMR Programming"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://raikwal-uses.vercel.app"
            title="Tech I Use"
            thumbnail={thumbTech}
          >
            Blog Page
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/designs">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              3D Designs
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
