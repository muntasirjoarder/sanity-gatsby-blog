export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1520c656788e9ae056426c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tyhao2u3',
                  apiId: 'bbc76fd7-37bf-442f-87ea-3e22dec54dd8'
                },
                {
                  buildHookId: '5e1520c6c1d7ee3be709bed6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v7achztg',
                  apiId: '0bf5846e-fce1-49d4-8511-ff62ddeff4a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muntasirjoarder/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v7achztg.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
