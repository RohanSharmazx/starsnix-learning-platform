import { defineField, defineType } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Code Repository / GitHub', value: 'github' },
          { title: 'Documentation / Link', value: 'docs' },
          { title: 'Slides / Presentation', value: 'slides' },
          { title: 'Cheatsheet / PDF', value: 'cheatsheet' },
          { title: 'Other Download', value: 'download' },
        ],
      },
      initialValue: 'github',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Resource title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required().error('Resource URL is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
})
