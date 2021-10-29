import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Shooter Game">
    <Container>
      <Title>
        Shooter Game <Badge>2020</Badge>
      </Title>
      <P>
        A fun and pixelated game which is purely advanced game development
        because it includes Health Kits, Bomb kits, and AI Enemies which will
        shoot the player when in range.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/shooter_01.png" alt="Commerce" />
      <WorkImage src="/images/works/shooter_02.gif" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
