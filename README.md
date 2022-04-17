# Elegant Seagull's Next.js Starter

```bash
# install
yarn install

# run
yarn dev
```

## ENV Variables

Located in `./.env`

- `NEXT_PUBLIC_SITE_URL` - used to transform absolute links when applicable (omit `https://www`. ex: `elegantseagulls.com`)
- `NEXT_PUBLIC_NO_INDEX` - prevent search engines from crawling the website

### Recommended variables

- CMS/API urls
- API Access Tokens
- Anything that shouldn't be stored in github or visible on the front-end. _Remember that variables used on the front-end will be visible in bundled code._

## Aliased Files/Directories

- **styles** &rarr; `@styles/*`
- **utils** &rarr; `@utils/*`
- **components** &rarr; `@components/*`

**Example aliasing**

```jsx
/* src/components/MyComponent.js */
import * as React from 'react';

export const MyComponent = () => <div>I'm a Component</div>;

/* src/pages/MyPage.js */
import React from 'react';
import { MyComponent } from '@components/MyComponent';

const MyPage = () => (
  <div>
    <p>I'm a Page</p>
    <MyComponent />
  </div>
);

export default MyPage;
```

## 3rd Party Resources

- [Next.js](https://nextjs.org/docs)
- [Next SEO](https://github.com/garmeeh/next-seo)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Stitches](https://stitches.dev/)
- [Jest](https://jestjs.io/)
