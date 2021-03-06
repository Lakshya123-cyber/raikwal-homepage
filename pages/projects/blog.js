import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BlogSite">
    <Container>
      <Title>
        BlogSite <Badge>2019</Badge>
      </Title>
      <P>
        A static blog website which was made during my web development introduction.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://zi2ccxwke8ppkhvplmlniq-on.drv.tw/blogsite/index1.html">
            BlogSite <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/blog_02.png" alt="Blog" />
      <WorkImage src="/images/works/blog_01.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Work