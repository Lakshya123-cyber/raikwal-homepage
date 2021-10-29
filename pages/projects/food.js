import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Restaurant Website">
    <Container>
      <Title>
        Restaurant Site <Badge>2020</Badge>
      </Title>
      <P>A static food-ordering website.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zi2ccxwke8ppkhvplmlniq-on.drv.tw/food%202/food.html">
            Restaurant Website <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/fud_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/fud_02.png" alt="Inkdrop" />
      <WorkImage src="/images/works/fud_03.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
