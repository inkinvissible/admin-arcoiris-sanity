import { defineType } from 'sanity'

export default defineType({
  name: 'novedad',
  title: 'Novedad',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descriptionLong',
      title: 'Descripción Detallada',
      type: 'text',
      rows: 8,
      description: 'Descripción más extensa de la novedad que aparecerá en el pop-up',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      title: 'Texto alternativo de la imagen',
      type: 'string',
      description: 'Breve descripción de la imagen para accesibilidad',
      validation: (Rule) => Rule.required(),
    },
  ],
})
