import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RPG Game">
    <Container>
      <Title>
        RPG Game <Badge>2020</Badge>
      </Title>
      <P>
        A fun and interactive pixelated game which is one-click and the player have health potions to increase its health too!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://titan-gamer.itch.io/rpg-game">
            Download Game <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/rpg_01.png" alt="RPG" />
      <WorkImage src="/images/works/rpg_02.gif" alt="RPG" />
    </Container>
  </Layout>
)

export default Work
