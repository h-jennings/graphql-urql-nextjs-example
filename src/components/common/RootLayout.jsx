import { styled } from '@styles/stitches.config';
import { Link } from './Link';
import { UnorderedList } from './List';
import { Stack } from './Stack';

export const RootLayout = ({ children }) => (
  <div>
    <Nav as="nav">
      <Stack gap="3" as={UnorderedList} direction="row">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </Stack>
    </Nav>
    <Main>{children}</Main>
  </div>
);

const Nav = styled('nav', {
  padding: '$4',
});

const Main = styled('main', {
  padding: '$4',
});
