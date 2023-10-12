const jsonServer = require('json-server');
const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();
apiServer.use(middlewares);
apiServer.use(apiRouter);
apiServer.listen(3000, () => {
  console.log('JSON Server is running');
});
