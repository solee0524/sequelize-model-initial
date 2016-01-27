import test from "tape"
import sequelizeModelInitial from "../src"

test("sequlizeModelInitial", (t) => {
  t.plan(1);
  t.equal(true, sequelizeModelInitial.default(), "return true");
});
