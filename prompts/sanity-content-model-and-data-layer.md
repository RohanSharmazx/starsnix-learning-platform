# Implementation Prompt: Sanity Content Model, Studio Structure, and Server-side Data Layer

## Goal
Implement the complete Starsnix content model in Sanity Studio (`course`, `module`, `lesson`, `instructor`, `category`, `video`, and `agentContext`) strictly matching the data specification in `GEMINI.md`, configure the Studio structure, and build the server-only Sanity read client, GROQ queries, image URL helper, and typed data layer for Next.js.

## Skills Read
- `GEMINI.md`: Sections 5, 6, 7, 8, 10, 12, 13 (data model requirements, server/client boundaries, private dataset token rule).
- `sanity-best-practices`: `defineType`, `defineField`, `defineArrayMember`, array `_key` conventions, image hotspot, GROQ projections, server client.
- `content-modeling-best-practices`: Separation of concerns, reference vs embedded object rules, decoupled data hierarchy.

## Code Inspected
- `sanity.config.ts`: Sanity Studio config mounted at `/studio`.
- `sanity/schemaTypes/index.ts`: Current empty schema definitions array.
- `sanity/structure.ts`: Default desk structure resolver.
- `sanity/env.ts`: `projectId` and `dataset` environment assertions.
- `.env.local`: Contains `NEXT_PUBLIC_SANITY_PROJECT_ID` (`3em745kf`) and `NEXT_PUBLIC_SANITY_DATASET` (`production`).

## Decisions & Assumptions
1. **Schema Definitions**:
   - `course`: Top-level document. Fields: `title`, `slug`, `summary`, `coverImage` (with hotspot), `level` (`Beginner`, `Intermediate`, `Advanced`), `price`, `isPopular`, `studentCount`, `learningOutcomes` (array of `learningOutcome` objects), `instructor` (reference to `instructor`), `category` (reference to `category`), and `modules` (array of embedded `module` objects).
   - `module`: Embedded object type (never its own document, per Section 8). Fields: `title`, `summary`, and `lessons` (array of references to `lesson`). Derived numbering in the UI.
   - `lesson`: Independent document type. Fields: `title`, `slug`, `videoUrl` (YouTube, Vimeo, Bunny), `thumbnail` (image with hotspot), `duration` (string, e.g. "12m 30s"), `isFreePreview` (boolean flag), `studentCount` (number for display), `notes` (Portable Text rich text block array), `keyPoints` (array of strings for the "In this lesson you will" section), `proTip` (optional text), and `resources` (array of `resource` objects). Parent course derived via reverse reference in GROQ queries.
   - `instructor`: Document type. Fields: `name`, `slug`, `photo` (image with hotspot), `expertise` (string), `bio` (text).
   - `category`: Document type. Fields: `title`, `slug`, `description` (text).
   - `video`: Dedicated document for search intelligence. Fields: `videoUrl`, `providerId`, `chapters` (array of `{ startSeconds, label }`), `chunks` (array of `{ startSeconds, text }`). Internal lookup only.
   - `agentContext`: Search config document. Fields: `title`, `contentScope` (array of document types), and `instructions` (agent query guidance).
2. **Desk Structure**:
   - Organize Sanity Studio into intuitive sections: Courses, Lessons, Instructors, Categories, Video Ingestion Data, and Search Context.
3. **Data Layer & Server-Only Boundary**:
   - `sanity/lib/client.ts`: Uses `next-sanity` `createClient` configured for server execution with private `SANITY_API_READ_TOKEN`.
   - `sanity/lib/image.ts`: Helper `urlFor(source)` using `@sanity/image-url`.
   - `sanity/lib/queries.ts`: Typed GROQ queries with explicit projections (avoiding `*` overfetching and resolving reverse references for lessons -> parent course).
   - `sanity/lib/fetch.ts`: Server-side fetchers: `getCourses`, `getCourseBySlug`, `getLessonBySlug`, `getInstructors`, `getInstructorBySlug`, `getCategories`.

## Files Expected to Touch
- `sanity/schemaTypes/category.ts` [NEW]
- `sanity/schemaTypes/instructor.ts` [NEW]
- `sanity/schemaTypes/learningOutcome.ts` [NEW]
- `sanity/schemaTypes/resource.ts` [NEW]
- `sanity/schemaTypes/module.ts` [NEW]
- `sanity/schemaTypes/lesson.ts` [NEW]
- `sanity/schemaTypes/course.ts` [NEW]
- `sanity/schemaTypes/video.ts` [NEW]
- `sanity/schemaTypes/agentContext.ts` [NEW]
- `sanity/schemaTypes/index.ts` [MODIFY]
- `sanity/structure.ts` [MODIFY]
- `sanity/lib/client.ts` [NEW]
- `sanity/lib/image.ts` [NEW]
- `sanity/lib/queries.ts` [NEW]
- `sanity/lib/fetch.ts` [NEW]
- `.env.example` [MODIFY]

## Requirements
- Strictly follow the content relationships in `GEMINI.md` Section 8.
- Modules must be embedded objects in courses; lessons must be standalone documents.
- Reverse reference GROQ lookups must derive parent course and module order from lessons.
- Server-side read client must never leak private read tokens to the client browser.
- Studio must mount at `/studio` with clean structure navigation.

## Security Considerations
- Sanity dataset is private: client queries must be executed on the server.
- `SANITY_API_READ_TOKEN` stays strictly server-side.
- Browser receives only pre-rendered or serialized stored content, never direct database client handles with tokens.

## Acceptance Criteria
- [ ] All schema types defined with `defineType`, `defineField`, and `defineArrayMember`.
- [ ] Studio schema contains `course`, `module`, `lesson`, `instructor`, `category`, `video`, and `agentContext`.
- [ ] Studio structure provides organized desk navigation at `/studio`.
- [ ] Server client, image URL builder, and typed GROQ queries implemented.
- [ ] Data fetch functions return typed course, lesson, and instructor data.
- [ ] TypeScript check passes (`npx tsc --noEmit`).
- [ ] Lint check passes (`npm run lint`).
- [ ] Next.js production build passes (`npm run build`).

## Checks to Run
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Visit `http://localhost:3000/studio` to verify Sanity Studio loads and shows all content models in the sidebar.
2. Verify that creating a Course allows adding embedded Modules with references to Lessons.
3. Verify that the server client and GROQ queries build with no type errors.
