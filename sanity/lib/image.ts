import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

// Image URL builder for Sanity assets
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

type ImageSource = Parameters<typeof imageBuilder.image>[0]

export const urlForImage = (source: ImageSource) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
