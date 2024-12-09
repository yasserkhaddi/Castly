const router = require("./Routes/userRoutes");
const app = require("../../Config/Server");

app.use("/user", router);

const port = 3030;

app.listen(port, () => {
  `server connected successfuly on ${port}`;
});
