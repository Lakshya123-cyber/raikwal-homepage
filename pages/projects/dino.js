import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AI Chrome Dino">
    <Container>
      <Title>
        AI Chrome Dino <Badge>2021</Badge>
      </Title>
      <P>
        A neural network Project - AI Chrome Dino. Forms several generation to
        make itself perfect to play on its own.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Lakshya123-cyber/AI_DINO">
            Neural Dino <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/AI_DINO.gif" alt="Dinosaur" />
    </Container>
  </Layout>
)

export default Work
