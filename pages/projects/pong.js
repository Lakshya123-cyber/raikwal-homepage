import { Container, Badge, List, ListItem } from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Pong">
    <Container>
      <Title>
        AI Pong Game <Badge>2021</Badge>
      </Title>
      <P>
        A fun and interactive python game which is easy to play with the AI
        forever!
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

      <WorkImage src="/images/works/AI_PONG.gif" alt="RPG" />
    </Container>
  </Layout>
)

export default Work
