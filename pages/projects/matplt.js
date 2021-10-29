import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MatplotLib">
    <Container>
      <Title>
        MatplotLib <Badge>2021</Badge>
      </Title>
      <P>
        A fun graph project I made when I got to know about MatplotLib module in Python
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

      <WorkImage src="/images/works/mat_01.png" alt="Mat" />
      <WorkImage src="/images/works/mat_02.png" alt="Mat" />
    </Container>
  </Layout>
)

export default Work
