const fakePaths = [
  {
    slug: 'billaan',
    children: [
      {
        slug: 'vejledning',
        children: [
          {
            slug: 'hvad-koster-et-billaan',
            children: [],
          },
        ],
      },
      {
        slug: 'vejledning-2',
        children: [
          {
            slug: 'hvad-koster-et-billaan-2',
            children: [],
          },
        ],
      },
    ],
  },
{
    slug: 'motorcykellaan',
    children: [],
  },
  {
    slug: 'campingvognlaan',
    children: [],
  },
  {
    slug: 'samarbejdspartnere',
    children: [],
  },
  {
    slug: 'erhverv',
    children: [
      {
        slug: 'factoring',
        children: [
          {
            slug: 'hvad-er-factoring',
            children: [],
          },
        ],
      },
      {
        slug: 'factoring',
        children: [
          {
            slug: 'hvad-er-factoring-4',
            children: [],
          },
        ],
      },
    ],
  },
  {
    slug: 'om-al-finans',
    children: [],
  },
  ]
const paths = []
fakePaths.map(path => {
	propertiesToArray(path)

})
function propertiesToArray (obj, parent = [])
{
  paths.push({params: {slug: [...parent, obj.slug]}});
  if (obj.children.length > 0) {
  	obj.children.forEach(child => {
   		propertiesToArray(child, [...parent, obj.slug])
    })
  } 
}
