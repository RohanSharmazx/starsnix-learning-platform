import type { PortableTextBlock } from 'sanity'
import { client } from './client'
import {
  categoriesQuery,
  courseBySlugQuery,
  coursesQuery,
  instructorBySlugQuery,
  instructorsQuery,
  lessonBySlugQuery,
} from './queries'

// Types for Starsnix Content Entities
export interface SanityImageRef {
  asset?: {
    _ref: string
    _type: string
  }
  alt?: string
}

export interface CategorySummary {
  _id: string
  title: string
  slug: string
  description?: string
  courseCount?: number
}

export interface InstructorSummary {
  _id: string
  name: string
  slug: string
  photo?: SanityImageRef
  expertise?: string
  bio?: string
  courses?: CourseSummary[]
}

export interface LearningOutcomeItem {
  _key: string
  icon?: string
  title: string
  description?: string
}

export interface LessonResourceItem {
  _key: string
  type: string
  title: string
  description?: string
  url: string
}

export interface LessonSummary {
  _id: string
  title: string
  slug: string
  duration: string
  isFreePreview: boolean
  thumbnail?: SanityImageRef
  videoUrl?: string
}

export interface LessonDetail extends LessonSummary {
  studentCount?: number
  proTip?: string
  keyPoints?: string[]
  notes?: PortableTextBlock[]
  resources?: LessonResourceItem[]
  course?: {
    _id: string
    title: string
    slug: string
    instructor?: {
      name: string
      slug: string
      photo?: SanityImageRef
    }
    modules?: Array<{
      _key: string
      title: string
      lessons?: Array<{
        _id: string
        title: string
        slug: string
        duration: string
        isFreePreview: boolean
      }>
    }>
  }
}

export interface ModuleItem {
  _key: string
  title: string
  summary?: string
  lessons?: LessonSummary[]
}

export interface CourseSummary {
  _id: string
  title: string
  slug: string
  summary: string
  coverImage?: SanityImageRef
  level: string
  price: number
  isPopular?: boolean
  studentCount?: number
  moduleCount?: number
  lessonCount?: number
  instructor?: InstructorSummary
  category?: CategorySummary
}

export interface CourseDetail extends CourseSummary {
  learningOutcomes?: LearningOutcomeItem[]
  modules?: ModuleItem[]
}

// ─────────────────────────────────────────────────────────────
// Data Access Methods (Server-Only)
// ─────────────────────────────────────────────────────────────

export async function getCourses(): Promise<CourseSummary[]> {
  return await client.fetch<CourseSummary[]>(coursesQuery, {}, { next: { revalidate: 60 } })
}

export async function getCourseBySlug(slug: string): Promise<CourseDetail | null> {
  return await client.fetch<CourseDetail | null>(courseBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

export async function getLessonBySlug(slug: string): Promise<LessonDetail | null> {
  return await client.fetch<LessonDetail | null>(lessonBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

export async function getInstructors(): Promise<InstructorSummary[]> {
  return await client.fetch<InstructorSummary[]>(instructorsQuery, {}, { next: { revalidate: 120 } })
}

export async function getInstructorBySlug(slug: string): Promise<InstructorSummary | null> {
  return await client.fetch<InstructorSummary | null>(instructorBySlugQuery, { slug }, { next: { revalidate: 120 } })
}

export async function getCategories(): Promise<CategorySummary[]> {
  return await client.fetch<CategorySummary[]>(categoriesQuery, {}, { next: { revalidate: 300 } })
}
