import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Collaborative WhiteBoard">
    <Container>
      <Title>
        Collaborative WhiteBoard <Badge>2021</Badge>
      </Title>
      <P>
        A collaborative whiteboard which can be used by anyone from anywhere.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Lakshya123-cyber/Realtime-Whiteboard">
            Whiteboard <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, Node.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/board.gif" alt="Board" />
    </Container>
  </Layout>
)

export default Work
