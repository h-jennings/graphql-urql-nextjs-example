import { styled } from '@styles/stitches.config';
import { useRouter } from 'next/router';
import { Link } from './Link';

export const PreviewModeControls = () => {
  const { isPreview } = useRouter();

  if (!isPreview) return null;

  return (
    <Wrapper>
      <Link type="button" prefetch={false} href="/api/preview/exit">
        Exit Preview
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'fixed',
  bottom: '$1',
  left: '$1',
  zIndex: '$nuclear',
});
