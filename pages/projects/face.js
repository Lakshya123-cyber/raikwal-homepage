import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Face Recognizer">
    <Container>
      <Title>
        Face Recognizer <Badge>2021</Badge>
      </Title>
      <P>A face recognizer app pureply made from Python using OpenCV module.</P>
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

      <WorkImage src="/images/works/face_01.jpg" alt="Commerce" />
      <WorkImage src="/images/works/face_02.png" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
