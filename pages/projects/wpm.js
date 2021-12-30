import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="WPM Tester">
    <Container>
      <Title>
        WPM Tester <Badge>2021</Badge>
      </Title>
      <P>
        A replica of the Typing-Test which basically check how fast your fingers
        are on your keyboard.
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

      <WorkImage src="/images/works/wpm.gif" alt="WPM" />
    </Container>
  </Layout>
)

export default Work
