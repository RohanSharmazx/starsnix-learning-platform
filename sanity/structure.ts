import type { StructureResolver } from 'sanity/structure'

// Custom Studio Desk Structure organizing Starsnix content models
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Courses')
        .schemaType('course')
        .child(S.documentTypeList('course').title('All Courses')),

      S.listItem()
        .title('Lessons')
        .schemaType('lesson')
        .child(S.documentTypeList('lesson').title('All Lessons')),

      S.divider(),

      S.listItem()
        .title('Instructors')
        .schemaType('instructor')
        .child(S.documentTypeList('instructor').title('All Instructors')),

      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('All Categories')),

      S.divider(),

      S.listItem()
        .title('Video Intelligence')
        .schemaType('video')
        .child(
          S.documentTypeList('video')
            .title('Video Transcript Records')
            .filter('_type == "video"')
        ),

      S.listItem()
        .title('Search Agent Context')
        .schemaType('agentContext')
        .child(
          S.documentTypeList('agentContext')
            .title('Agent Context Configurations')
            .filter('_type == "agentContext"')
        ),
    ])
