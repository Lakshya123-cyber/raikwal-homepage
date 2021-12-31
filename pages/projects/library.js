import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
          <Meta>Source</Meta>
          <Link href="https://github.com/Lakshya123-cyber/Library-Management-System">
            Library Management <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/Library.gif" alt="Library" />
    </Container>
  </Layout>
)

export default Work
