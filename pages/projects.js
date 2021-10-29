import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBlog from '../public/images/works/blog.png'
import thumbComm from '../public/images/works/comm.png'
import thumbFace from '../public/images/works/face.png'
import thumbFood from '../public/images/works/fud.png'
import thumbKey from '../public/images/works/key.jpg'
import thumbMatplt from '../public/images/works/mat.png'
import thumbNetflix from '../public/images/works/net_01.png'
import thumbPaint from '../public/images/works/paint.png'
import thumbPiano from '../public/images/works/piano.png'
import thumbRpg from '../public/images/works/rpg.png'
import thumbShooter from '../public/images/works/shoot.png'
import thumbSpeech from '../public/images/works/speech.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="matplt" title="MatplotLib" thumbnail={thumbMatplt}>
            A graph made just for fun. Can be used in many work sectors.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="rpg" title="RPG Game" thumbnail={thumbRpg}>
            An awesome RPG Game made purely from Pygame(Python).
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="shooter" title="Shooter" thumbnail={thumbShooter}>
            A pixelated and fun shooting game made using pygame(python).
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="piano" thumbnail={thumbPiano} title="Piano Tiles">
            An AI click bot which clicks on the black tiles automatically.
            Basically a way to hack the game!
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          AI Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="face" thumbnail={thumbFace} title="Face Recog.">
            My first AI project - Face recognizer. It can detect human faces
            easily with or without mask. Might build a face mask detector too!
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="speech"
            thumbnail={thumbSpeech}
            title="Speech Recog."
          >
            An awesome replica of J.A.R.V.I.S. It can open anything on computer
            just by giving commands through your microphone. (Basically Alexa
            version 2)
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="key" thumbnail={thumbKey} title="AI Keyboard">
            People who are uncomfortable with the normal keyboard can try out
            this interesting software which is a Virtual Keyboard! It takes
            input by moving your fingers in front of your camera.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="paint" thumbnail={thumbPaint} title="AI Paint App">
            The most advance projects of all time - AI Paint App. It takes input
            from the user by moving their fingers in front of the camera to
            draw. We can select different colours and also can erase the bad
            artwork.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="blog" thumbnail={thumbBlog} title="Blog Website">
            My first web development project - A static Blog website.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="commerce"
            thumbnail={thumbComm}
            title="E-commerce Website"
          >
            An interative e-commerce website.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="food"
            thumbnail={thumbFood}
            title="Restaurant Website"
          >
            A simple and sleek Restaurant website.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="netflix"
            thumbnail={thumbNetflix}
            title="Netflix Website"
          >
            A replica of the Netflix website. The only difference is that you
            cannot watch any movies.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
