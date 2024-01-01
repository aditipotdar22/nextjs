import { type SchemaTypeDefinition } from 'sanity'
import { sliderCard } from './slidercard'
import { demoForm } from './demoform'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sliderCard, demoForm]
}
