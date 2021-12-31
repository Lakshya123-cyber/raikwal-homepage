import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
          <Meta>Source</Meta>
          <Link href="https://github.com/Lakshya123-cyber/WPM-Tester">
            WPM Tester <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
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
