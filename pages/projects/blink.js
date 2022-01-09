import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Blink Counter">
    <Container>
      <Title>
        Blink Counter <Badge>2021</Badge>
      </Title>
      <P>An app which can count the number of Blinks.</P>
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

      <WorkImage src="/images/works/blink.png" alt="Bird" />
      <WorkImage src="/images/works/blink1.png" alt="Bird" />
    </Container>
  </Layout>
)

export default Work
