import { defineArrayMember, defineField, defineType } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Course title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'summary',
      title: 'Marketing Summary',
      type: 'text',
      rows: 3,
      description: 'Short marketing synopsis of the course shown on the catalog card and hero.',
      validation: (rule) => rule.required().error('Summary is required'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required().error('Cover image is required'),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
      },
      initialValue: 'Beginner',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price ($ USD)',
      type: 'number',
      description: 'Display price in USD. Enter 0 for free courses.',
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'isPopular',
      title: 'Popular Flag',
      type: 'boolean',
      description: 'Optional popular badge displayed on the course card.',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count (Display)',
      type: 'number',
      description: 'Presentational learner count.',
      initialValue: 0,
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
      validation: (rule) => rule.required().error('Instructor reference is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required().error('Category reference is required'),
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'What You Will Learn',
      type: 'array',
      description: 'Short list of learning outcomes for the course overview.',
      of: [
        defineArrayMember({
          type: 'learningOutcome',
        }),
      ],
    }),
    defineField({
      name: 'modules',
      title: 'Modules (Ordered Curriculum)',
      type: 'array',
      description: 'Ordered list of curriculum modules. Module numbers (e.g. Module 1, 2) are derived from position.',
      of: [
        defineArrayMember({
          type: 'module',
        }),
      ],
      validation: (rule) => rule.required().min(1).error('A course must have at least one module'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      instructorName: 'instructor.name',
      categoryTitle: 'category.title',
      level: 'level',
      media: 'coverImage',
    },
    prepare({ title, instructorName, categoryTitle, level, media }) {
      const sub = [categoryTitle, level, instructorName ? `by ${instructorName}` : null]
        .filter(Boolean)
        .join(' • ')
      return {
        title,
        subtitle: sub,
        media,
      }
    },
  },
})
