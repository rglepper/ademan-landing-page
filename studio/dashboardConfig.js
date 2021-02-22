export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '603355b698d6e8eeebaf0e14',
                  title: 'Sanity Studio',
                  name: 'ademan-landing-page-studio',
                  apiId: 'de21c20f-63a3-4677-8f74-6bdc96f1be7b'
                },
                {
                  buildHookId: '603355b6258d669309220b1c',
                  title: 'Landing pages Website',
                  name: 'ademan-landing-page',
                  apiId: '9ea77e15-459a-4d34-9a85-ba77fa0c2124'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rglepper/ademan-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ademan-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
