import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Flappy Bird">
    <Container>
      <Title>
        AI Flappy Bird <Badge>2021</Badge>
      </Title>
      <P>
        A neural network Project - AI Flappy Bird. Forms several generation to
        make itself perfect to play on its own.
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

      <WorkImage src="/images/works/AI_BIRD.gif" alt="Bird" />
    </Container>
  </Layout>
)

export default Work