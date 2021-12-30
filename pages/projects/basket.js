import { Container, Badge, List, ListItem } from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shot Predictor">
    <Container>
      <Title>
        Shot Predictor <Badge>2021</Badge>
      </Title>
      <P>
        An AI which can predict if the ball is going inside the basket or not.
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

      <WorkImage src="/images/works/Basket.gif" alt="Netflix" />
    </Container>
  </Layout>
)

export default Work
