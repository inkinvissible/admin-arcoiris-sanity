import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {esESLocale} from '@sanity/locale-es-es'

export default defineConfig({
  name: 'default',
  title: 'admin-arcoiris',

  projectId: 'wiylzlnn',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), esESLocale()],

  schema: {
    types: schemaTypes,
  },
})
