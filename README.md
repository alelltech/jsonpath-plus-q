# jsonpath-plus-q

JSONPath-Plus for multiple formats json, yaml and XML.

```console
$ npm i -s @alell/jsonpath-plus-q
```

```ts
import { yq, jq, xq } from '@alell/jsonpath-plus-q';

const j = jq(".a", JSON.stringify({a: "json field result"}))
const x = xq(".a._text", '<a>xml element result</a>');
const y = yq(".a", 'a: "yaml field result"');

```

*If you like our project help us to make more best solutions.*

> `Bitcoin` / network `BTC`:
>
> `1NvnQAp2e46Fqv4YaoYTioypJZdq4Kc3Az`



> `Etherium` / network `Etherium`:
>
> `0x38a2113604fb3d642bbd009301e94848a499cea4`

> `BitTorrent` / network `Tron`:
>
> `TD9LHa5BjWQpf4oP3uYWP8ghnojJWJy53C`
