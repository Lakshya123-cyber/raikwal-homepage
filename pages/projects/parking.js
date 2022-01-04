import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Parking Lots Counter">
    <Container>
      <Title>
        Parking Lots Counter <Badge>2021</Badge>
      </Title>
      <P>
        An AI which can detect and count the numebr of spaces left in the
        parking lot.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Lakshya123-cyber/Parking_Lots_Detector">
            Lots Counter <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/parking.gif" alt="Parking" />
      <WorkImage src="/images/works/park2.png" alt="Parking" />
    </Container>
  </Layout>
)

export default Work
