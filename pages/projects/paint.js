import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Paint">
    <Container>
      <Title>
        AI Paint App <Badge>2021</Badge>
      </Title>
      <P>
        An advance AI Project - AI Paint App. Takes fingers as input and draws
        on screen. Basically Air Painting!
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

      <WorkImage src="/images/works/paint_01.jpg" alt="Commerce" />
      <WorkImage src="/images/works/paint_02.png" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
