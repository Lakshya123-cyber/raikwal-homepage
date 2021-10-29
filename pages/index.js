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
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  // IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbNetflix from '../public/images/links/netflix.png'

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
          <p>Digital Craftsman ( Developer / Designer )</p>
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
            src="/images/profile.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          Lakshya Raikwal with extensive knowledge and 3 years of experience
          till now, working on AI using Python and little bit of web
          development, is a passionate developer who has keen interest in
          programming and developing new things.
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
          Did my kindergarten in Maris Stella Kindergarten, Singapore. After
          that went back to India for further studies.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Came back to Singapore and started my coding and programming journey!
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          An expert in Python / Web Development
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 🤍
        </Heading>
        <Paragraph>
          Gaming, Music, 3D Designing, Playing Tabla, Artificial Intelligence
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
            <Link href="https://twitter.com/lakshya_raikwal" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @lakshya_raikwal
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
          {/* UPDATE DISCORD LINK~ */}
          {/* <ListItem>
            <Link href="https://discord.com/d🙃#7976" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem href="https://www.youtube.com/watch?v=NCIiiwqMBhI" title="Minecraft Parkour" thumbnail={thumbYouTube}>
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://netflix-e1647.firebaseapp.com"
            title="Netflix"
            thumbnail={thumbNetflix}
          >
            Replica of Netflix
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