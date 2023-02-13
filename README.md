Install with `npm install --legacy-peer-deps`

This repo demonstrates:

1. how a custom server, with a page **without** getInitialProps, with next-routes **incorrectly** populate `router.query`
    1. From the index page, click on `Go to "a"`
    1. The console logs: `from A, router.query :  {slug: 'hello-world'}`, it works because of client side navigation
    1. Refresh the page
    1. The console logs: `from A, router.query :  {}`, the query shouldn't be empty

1. how a custom server, with a page implemeting getInitialProps, with next-routes correctly populate `router.query`
    1. From the index page, click on `Go to "b"`
    1. The console logs:
    ```
    from getInitialProps, ctx.query {slug: 'hello-world'}`
    from B, router.query :  {slug: 'hello-world'}
    ```
    1. Refresh the page
    1. The console logs: `from B, router.query :  {slug: 'hello-world'}`, the query is correctly populated
