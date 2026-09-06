import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { instructor } from './instructor'
import { learningOutcome } from './learningOutcome'
import { resource } from './resource'
import { moduleType } from './module'
import { lesson } from './lesson'
import { course } from './course'
import { video } from './video'
import { agentContext } from './agentContext'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    course,
    moduleType,
    lesson,
    instructor,
    category,
    learningOutcome,
    resource,
    video,
    agentContext,
  ],
}
