// eslint-disable-next-line import/prefer-default-export
export const MainLayout = {
  global: {
    tabEnableFloat: true
  },
  layout: {
    type: 'row',
    id: '#1',
    children: [
      {
        type: 'row',
        id: '#29',
        weight: 17.694805194805195,
        children: [
          {
            type: 'tabset',
            id: '#4',
            weight: 50,
            children: [
              {
                type: 'tab',
                name: 'AddCall',
                component: 'AddCall'
              }
            ]
          },
          {
            type: 'tabset',
            id: '#28',
            weight: 50,
            children: [
              {
                type: 'tab',
                name: 'Calls List Class',
                component: 'CallsList'
              }
            ]
          }
        ]
      },
      {
        type: 'row',
        id: '#35',
        weight: 15.10025651700936,
        children: [
          {
            type: 'tabset',
            id: '#15',
            weight: 50,
            children: [
              {
                type: 'tab',
                name: 'Leaflet Map',
                component: 'Leaflet'
              }
            ]
          },
          {
            type: 'tabset',
            id: '#34',
            weight: 50,
            children: [
              {
                type: 'tab',
                name: 'Esri Map',
                component: 'Esri'
              }
            ]
          }
        ]
      },
      {
        type: 'row',
        id: '#41',
        weight: 17.204938288185442,
        children: [
          {
            type: 'tabset',
            id: '#24',
            weight: 50,
            children: [
              {
                type: 'tab',
                name: 'Here Map',
                component: 'Here'
              }
            ]
          },
          {
            type: 'tabset',
            id: '#40',
            weight: 50,
            children: [
              {
                type: 'tab',
                name: 'Google Map',
                component: 'Google'
              }
            ],
            active: true
          }
        ]
      }
    ]
  }
};
