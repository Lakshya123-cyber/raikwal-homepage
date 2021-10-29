import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBook from '../public/images/contents/book.jpg'
import thumbCoil from '../public/images/contents/coil.jpg'
import thumbEgg from '../public/images/contents/egg.jpg'
import thumbMando from '../public/images/contents/mando.jpg'
import thumbVibe from '../public/images/contents/vibe.jpg'
import thumbDonut from '../public/images/contents/donut.jpg'

const Designs = () => (
  <Layout title="Designs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        3D Designs
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Custom Logo" thumbnail={thumbBook} />
          <GridItem title="Abstract Coil" thumbnail={thumbCoil} />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Abstract Egg" thumbnail={thumbEgg} />
          <GridItem title="Mandalorian Scene" thumbnail={thumbMando} />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="90's Vibe" thumbnail={thumbVibe} />
          <GridItem title="Wavy Donut" thumbnail={thumbDonut} />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Designs
