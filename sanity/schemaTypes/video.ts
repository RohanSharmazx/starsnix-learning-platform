import { defineArrayMember, defineField, defineType } from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video Intelligence Record',
  type: 'document',
  description: 'Internal lookup document created by the video ingestion pipeline. Not shown to users as a direct result.',
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (rule) => rule.required().error('Video URL is required'),
    }),
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'Bunny', value: 'bunny' },
        ],
      },
    }),
    defineField({
      name: 'chapters',
      title: 'Table of Contents / Chapters',
      type: 'array',
      description: 'Timestamped chapter labels for high-precision timestamp matching.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'chapter',
          fields: [
            defineField({
              name: 'startSeconds',
              title: 'Start Seconds',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'label',
              title: 'Chapter Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              start: 'startSeconds',
            },
            prepare({ title, start }) {
              const mins = Math.floor((start || 0) / 60)
              const secs = Math.floor((start || 0) % 60)
              const timestamp = `${mins}:${secs.toString().padStart(2, '0')}`
              return {
                title,
                subtitle: `At ${timestamp} (${start}s)`,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'chunks',
      title: 'Transcript Chunks',
      type: 'array',
      description: 'Split timestamped chunks of transcript. Used as backstop lookup.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'transcriptChunk',
          fields: [
            defineField({
              name: 'startSeconds',
              title: 'Start Seconds',
              type: 'number',
              validation: (rule) => rule.required().min(0),
            }),
            defineField({
              name: 'text',
              title: 'Chunk Text',
              type: 'text',
              rows: 2,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'text',
              start: 'startSeconds',
            },
            prepare({ title, start }) {
              const mins = Math.floor((start || 0) / 60)
              const secs = Math.floor((start || 0) % 60)
              return {
                title: title ? (title.length > 60 ? title.substring(0, 60) + '...' : title) : '',
                subtitle: `${mins}:${secs.toString().padStart(2, '0')}`,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'videoUrl',
      chapters: 'chapters',
    },
    prepare({ title, chapters }) {
      const chapterCount = Array.isArray(chapters) ? chapters.length : 0
      return {
        title,
        subtitle: `${chapterCount} chapters indexed`,
      }
    },
  },
})
