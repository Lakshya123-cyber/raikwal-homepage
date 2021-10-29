import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Speech Recog.">
    <Container>
      <Title>
        Speech Recognizer <Badge>2021</Badge>
      </Title>
      <P>
        A replica of J.A.R.V.I.S. It takes input from the microphone and can
        open any app on your system. It can also send whatsapp messages and can
        even send mails.
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

      <WorkImage src="/images/works/speech_01.jpg" alt="Commerce" />
      <WorkImage src="/images/works/speech_02.png" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
