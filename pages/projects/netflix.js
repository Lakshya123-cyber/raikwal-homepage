import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Netflix">
    <Container>
      <Title>
        Netflix <Badge>2021</Badge>
      </Title>
      <P>
        A complete replica of the original Netflix Website except it does not
        contain any movies or series to watch.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://netflix-e1647.firebaseapp.com">
            Netflix <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Socket.io, React Native</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/net_01.png" alt="Netflix" />
      <WorkImage src="/images/works/net_02.png" alt="Netflix" />
      <WorkImage src="/images/works/net_03.png" alt="Netflix" />
    </Container>
  </Layout>
)

export default Work
