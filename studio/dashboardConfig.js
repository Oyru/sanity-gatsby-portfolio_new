export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6199956bb4e38e3c9597a0d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-new-studio-9ok4o9ve',
                  apiId: '3b73c2b7-df6e-4b1a-8555-45e05a0100b4'
                },
                {
                  buildHookId: '6199956b89c930ef5afa6962',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-new-web',
                  apiId: '690fac96-fc3a-4826-8576-80eb42a86ec5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oyru/sanity-gatsby-portfolio_new',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-new-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
