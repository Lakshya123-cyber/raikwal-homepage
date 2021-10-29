import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Piano AI">
    <Container>
      <Title>
        AI Piano Tiles <Badge>2021</Badge>
      </Title>
      <P>
        An AI Click Bot which can hack Piano Tiles Game.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/piano_01.gif" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
