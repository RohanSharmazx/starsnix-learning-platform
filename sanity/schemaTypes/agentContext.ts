import { defineArrayMember, defineField, defineType } from 'sanity'

export const agentContext = defineType({
  name: 'agentContext',
  title: 'Search Agent Context & Configuration',
  type: 'document',
  description: 'Configuration for Sanity Context MCP and AI search agent. Controls content scope filter and query guidance instructions.',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name',
      type: 'string',
      initialValue: 'Default Starsnix Search Agent Context',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contentScope',
      title: 'Content Scope (Allowed Types)',
      type: 'array',
      description: 'Document types accessible by the search agent.',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      initialValue: ['course', 'lesson', 'instructor', 'category', 'video'],
    }),
    defineField({
      name: 'instructions',
      title: 'Search Query & Ranking Instructions',
      type: 'text',
      rows: 10,
      description: 'System-level instructions injected into the Sanity Context MCP server.',
      initialValue:
        'Ground every result in stored data. Never invent timestamps or lesson titles. First match video chapters (table of contents). If no chapter matches, fall back to matching transcript chunks. Rank by specificity.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
