import { defineArrayMember, defineField, defineType } from 'sanity'

export const moduleType = defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Module Title',
      type: 'string',
      validation: (rule) => rule.required().error('Module title is required'),
    }),
    defineField({
      name: 'summary',
      title: 'Module Summary',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons (Ordered)',
      type: 'array',
      description: 'Ordered list of lessons within this module. Lesson numbering (e.g. 5.1) is derived from order.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'lesson' }],
        }),
      ],
      validation: (rule) => rule.required().min(1).error('A module must contain at least one lesson'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      summary: 'summary',
      lessons: 'lessons',
    },
    prepare({ title, summary, lessons }) {
      const count = Array.isArray(lessons) ? lessons.length : 0
      return {
        title,
        subtitle: `${count} ${count === 1 ? 'lesson' : 'lessons'}${summary ? ` • ${summary}` : ''}`,
      }
    },
  },
})
