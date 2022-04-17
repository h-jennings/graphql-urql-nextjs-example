import { getPreviewContent } from '@graphql/client';
import {
  sendUnauthorized,
  serverSideRedirect,
} from '@utils/common/helpers/api-route.helpers';

const preview = async (req, res) => {
  const { secret, slug } = req.query;

  if (secret !== process.env.SECRET_KEY || !slug) {
    return sendUnauthorized(res, 'Invalid token or slug');
  }

  // Try and get data
  const data = await getPreviewContent(slug);

  // If the page data doesn't exist prevent preview mode from being enabled
  if (!data) {
    return sendUnauthorized(
      res,
      'No page data to display. Slug may be invalid.',
    );
  }

  /**
   * Calling setPreviewData sets a preview cookies that turn on the preview mode.
   * Any requests to Next.js containing these cookies will be seen as preview mode
   */
  res.setPreviewData({
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  });

  serverSideRedirect(res, `${process.env.BASE_PATH}${slug}`, 307);

  res.end();
};

export default preview;
