import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Aeronautics Website">
    <Container>
      <Title>
        Aeronautics Website <Badge>2021</Badge>
      </Title>
      <P>
        A meaningful and interactive aeronautics website made to larn more about it.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://avianc-home.web.app/">
            Aeronautics Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/aero1.png" alt="Aero" />
      <WorkImage src="/images/works/aero2.png" alt="Aero" />
    </Container>
  </Layout>
)

export default Work
