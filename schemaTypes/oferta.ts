import { defineType } from 'sanity'

export default defineType({
  name: 'oferta',
  title: 'Oferta',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastMinute',
      title: '¿Oferta de último minuto?',
      type: 'boolean',
      initialValue: false,
    },
  ],
})
