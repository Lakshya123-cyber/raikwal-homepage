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

import thumbMatrix from '../public/images/works/matrix.png'
import thumbBird from '../public/images/works/bird.jpg'
import thumbDino from '../public/images/works/dino.png'
import thumbCar from '../public/images/works/car.png'
import thumbPong from '../public/images/works/pong.png'
import thumbBasket from '../public/images/works/ball.png'
import thumbLibrary from '../public/images/works/books.png'
import thumbParking from '../public/images/works/park.png'
import thumbSnake from '../public/images/works/snek.png'
import thumbWhiteboard from '../public/images/works/board.png'
import thumbWPM from '../public/images/works/wpm.png'

import thumbBlink from '../public/images/works/blink.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Casual Projects
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

        <Section>
          <WorkGridItem
            id="library"
            title="Books Management System"
            thumbnail={thumbLibrary}
          >
            A book management system useful for Library users.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="snake" title="Snake Game" thumbnail={thumbSnake}>
            A Terminal-based Snake Game made purely from Python (curses).
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="board"
            title="Collaborative WhiteBoard"
            thumbnail={thumbWhiteboard}
          >
            A collaborative whiteboard which is made using html, express.io and
            socket.js
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="wpm" thumbnail={thumbWPM} title="WPM Tester">
            A typing test game made from Python which is very simple and easy to
            use
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
        <Section delay={0.3}>
          <WorkGridItem
            id="basket"
            thumbnail={thumbBasket}
            title="Shot Predictor"
          >
            This AI after 10 frames of the video can easily detect if the ball
            is going inside the basket or not.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="parking"
            thumbnail={thumbParking}
            title="Parking Lots Detector"
          >
            This can count the number of parking lots left in any given video.
            Have to do certain things manually but the result is fully
            automatic.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="pong" thumbnail={thumbPong} title="AI Pong Game">
            This is a simple Pong game made from Python.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="blink" thumbnail={thumbBlink} title="Blink Counter">
            This can count the number of blinks.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Neural Network Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="bird" thumbnail={thumbBird} title="Neural Bird">
            This is a flappy bird game which works on the principle of neural
            networking. This bird can have several generations and whichever
            generation is perfect, that bird continues its journey between the
            pipes.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="car"
            thumbnail={thumbCar}
            title="Neural Car (LESLA)"
          >
            This is a car game which works on the principle of neural
            networking. This car can have several generations and whichever
            generation is perfect, that car continues its journey.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="dino" thumbnail={thumbDino} title="Neural Dino">
            This is a Dinosaur game which works on the principle of neural
            networking. This dino can have several generations and whichever
            generation is perfect, that dino continues its journey.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Web Development Projects
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
        <Section delay={0.6}>
          <WorkGridItem id="matrix" thumbnail={thumbMatrix} title="Matrix Rain">
            A fun project I made just to revise my JS concepts LOL.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
