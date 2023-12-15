const schema = {
  name: 'list', 
  title: 'List',   
  type: 'document',
  fields: [
    {
      name: 'title', 
      title: 'Title',
      type: 'string', 
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title' }
    },
    {
      name: 'posts',
      title: 'posts',
      type: 'array',       
      of: [{
        type: 'reference', 
        to: [{ type: 'post'}]
      }]
    }
  ]
}

export default schema