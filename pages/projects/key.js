import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Keyboard">
    <Container>
      <Title>
        AI Keyboard <Badge>2021</Badge>
      </Title>
      <P>
        An interactive and fun keyboard which runs via camera input. Uses fingers to select key and type it out on screen.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/key_01.jpg" alt="Commerce" />
      <WorkImage src="/images/works/key_02.png" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
