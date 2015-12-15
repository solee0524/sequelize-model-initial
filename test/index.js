import test from "tape"
import sequlizeModelInitial from "../src"

test("sequlizeModelInitial", (t) => {
  t.plan(1)
  t.equal(true, sequlizeModelInitial.default(), "return true")
})
