export const sendUnauthorized = (res, message) =>
  res.status(401).json({ message });

export const serverSideRedirect = (res, destinationPath, statusCode = 301) => {
  debugger;
  res.writeHead(statusCode, { Location: destinationPath });
};
