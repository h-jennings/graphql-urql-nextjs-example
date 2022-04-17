import { serverSideRedirect } from '@utils/common/helpers/api-route.helpers';

const exit = (req, res) => {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to the index page.
  serverSideRedirect(res, req.headers.referer || '/', 307);

  res.end();
};

export default exit;
