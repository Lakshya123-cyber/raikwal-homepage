import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="E-comm Website">
    <Container>
      <Title>
        E-Commerce Website <Badge>2019</Badge>
      </Title>
      <P>
        An interactive E-commerce website which I made when I started advancing
        in Web development
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zi2ccxwke8ppkhvplmlniq-on.drv.tw/E-COMMERCE/">
            E-comm Website <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/comm_01.png" alt="Commerce" />
      <WorkImage src="/images/works/comm_02.png" alt="Commerce" />
    </Container>
  </Layout>
)

export default Work
