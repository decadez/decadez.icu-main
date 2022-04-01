const sidebarBlog = {
  title: '博客',
  heading: true,
  path: '/blog',
  routes: [
    {
      heading: false,
      path: '',
      routes: [
        // 一、devOps
        {
          title: 'devOps',
          path: '/blog',
          routes: [
            {
              title: 'nginx',
              path: '/blog/devOps/nginx-docs',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/devOps/nginx-docs/base-use',
                },
              ],
            },
            {
              title: 'gitlab',
              path: '/blog/devOps/gitlab',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/devOps/gitlab/base-use',
                },
              ],
            },
            {
              title: 'docker',
              path: '/blog/devOps/docker-docs',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/devOps/docker-docs/base-use',
                },
              ],
            },
            {
              title: 'k8s',
              path: '/blog/devOps/k8s-docs',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/devOps/k8s-docs/base-use',
                },
              ],
            },
            {
              title: 'micro-frontends',
              path: '/blog/devOps/micro-frontends',
              routes: [
                {
                  title: '微前端的实现',
                  path: '/blog/devOps/micro-frontends/realize',
                },
              ],
            },
          ],
        },
        // 二、Framework
        {
          title: 'framework',
          path: '/blog/framework',
          routes: [
            {
              title: 'react',
              path: '/blog/framework/react',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/react/base-use',
                },
              ],
            },
            {
              title: 'vue',
              path: '/blog/framework/vue',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/vue/base-use',
                },
              ],
            },
            {
              title: 'express',
              path: '/blog/framework/express',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/express/realize',
                },
              ],
            },
            {
              title: 'koa',
              path: '/blog/framework/koa',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/koa/base-use',
                },
              ],
            },
            {
              title: 'next',
              path: '/blog/framework/next',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/next/base-use',
                },
              ],
            },
            {
              title: 'nuxt',
              path: '/blog/framework/nuxt',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/nuxt/base-use',
                },
              ],
            },
            {
              title: 'nest',
              path: '/blog/framework/nest',
              routes: [
                {
                  title: '基础使用',
                  path: '/blog/framework/nest/base-use',
                },
              ],
            },
          ],
        },
        // 三、program-languages
        {
          title: 'program-languages',
          path: '/blog/program-languages',
          routes: [
            {
              title: 'javascript',
              path: '/blog/program-languages/javascript',
              routes: [
                {
                  title: 'javascript的前世今生',
                  path: '/blog/program-languages/javascript/base-use',
                },
              ],
            },
            {
              title: 'rust',
              path: '/blog/program-languages/rust',
              routes: [
                {
                  title: 'rust的前世今生',
                  path: '/blog/program-languages/rust/base-use',
                },
              ],
            },
            {
              title: 'java',
              path: '/blog/program-languages/java',
              routes: [
                {
                  title: 'java的前世今生',
                  path: '/blog/program-languages/java/base-use',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebarBlog;
