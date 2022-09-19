# Gatsby 5 higher order component with partial hydration issue reproduction

To see build fail, run:

```sh
npm install --legacy-peer-deps
npm run build
```

You should see the following error:

```
# ...

success Rewriting compilation hashes - 0.052s
success Building static HTML for pages - 3.357s - 1/1 0.30/s
failed Building partial HTML for pages - 0.073s

 ERROR #80000

Building partial HTML failed for path "/"

This can happen if interactive elements like "useEffect", "useState", "createContext" or event handlers
are used in a component without declaring the "client export" directive at the top of the file.

Consider adding "client export" to the top of your file if your component is interactive,
otherwise refactor your component so it can be statically rendered with React Server Components (RSC).



  Error: Unsupported server component type: {...}

  - react-server-dom-webpack-writer.node.production.min.server.js:34 P
    [gatsby-5-hoc-partial-hydration]/[react-server-dom-webpack]/cjs/react-server-dom-webpack-writer.node.production.min.server.js:34:92

  - react-server-dom-webpack-writer.node.production.min.server.js:38 ua
    [gatsby-5-hoc-partial-hydration]/[react-server-dom-webpack]/cjs/react-server-dom-webpack-writer.node.production.min.server.js:38:157

  - react-server-dom-webpack-writer.node.production.min.server.js:32 Array.toJSON
    [gatsby-5-hoc-partial-hydration]/[react-server-dom-webpack]/cjs/react-server-dom-webpack-writer.node.production.min.server.js:32:408

  - stringify

  - react-server-dom-webpack-writer.node.production.min.server.js:44 za
    [gatsby-5-hoc-partial-hydration]/[react-server-dom-webpack]/cjs/react-server-dom-webpack-writer.node.production.min.server.js:44:301

  - react-server-dom-webpack-writer.node.production.min.server.js:47 Immediate._onImmediate
    [gatsby-5-hoc-partial-hydration]/[react-server-dom-webpack]/cjs/react-server-dom-webpack-writer.node.production.min.server.js:47:95

  - timers:471 processImmediate
    node:internal/timers:471:21
```
