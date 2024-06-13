import * as assert from "assert";
import { jq, yq, xq } from "../index";

describe("InlineScripts Suite", ()=>{
  after(() =>{
    delete process.env.EXT
  })

  it('jq', async () => {
    const j = jq(".a", JSON.stringify({a: "json field result"}));

    assert(j, 'result must be defined');
    assert(j.length === 1, 'result must have 1 item.');

  })
  it('xq', async () => {
    const x = xq(".a._text", '<a>xml element result</a>');

    assert(x, 'result must be defined');
    assert(x.length === 1, 'result must have 1 item.');

  })
  it('yq', async () => {
    const y = yq(".a", 'a: "yaml field result"');

    assert(y, 'result must be defined');
    assert(y.length === 1, 'result must have 1 item.');

  })

})
