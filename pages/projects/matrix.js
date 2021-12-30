import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Matrix">
    <Container>
      <Title>
        Matrix Rain <Badge>2021</Badge>
      </Title>
      <P>A fun website I made just to revise my Javascript concepts.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            Coming Soon! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/matrix.png" alt="Matrix" />
    </Container>
  </Layout>
)

export default Work
