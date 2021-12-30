import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Library Management System">
    <Container>
      <Title>
        Library Management System <Badge>2021</Badge>
      </Title>
      <P>
        A terminal-based app through which one can check whether the book is
        available or not, issue and return the books and also add the books to
        your inventory.
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

      <WorkImage src="/images/works/Library.gif" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
