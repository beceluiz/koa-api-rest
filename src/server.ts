import koa from "koa";
import routes from "koa-router";

const app = new koa();

app.listen(3000, () => {
  console.log("listening  on port 3000");
});
