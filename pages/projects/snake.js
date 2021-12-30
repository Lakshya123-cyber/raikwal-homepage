import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Terminal Snake">
    <Container>
      <Title>
        Terminal Snake <Badge>2021</Badge>
      </Title>
      <P>
        This game was developed in under 5-minutes which just focuses on the
        snake movement and it eating the PI symbol.
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

      <WorkImage src="/images/works/snek.gif" alt="Snake" />
    </Container>
  </Layout>
)

export default Work
