import Image from 'next/image';
import PropTypes from 'prop-types';

// Should map to a third party service (like Contentful)
export const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const NextImageWithLoader = ({ alt, ...rest }) => {
  return <Image loader={loader} alt={alt ?? ''} {...rest} />;
};

NextImageWithLoader.propTypes = {
  alt: PropTypes.string,
};
