import { defineField, defineType, defineArrayMember } from 'sanity';
import { client } from '../lib/client';
import { PROJECT_IDENTIFIERS_QUERY } from '../lib/queries';

const EXPERIENCE_TYPE_OPTS: { title: string, value: string }[] = [
  { title: 'College', value: 'college' },
  { title: 'Research', value: 'research' },
  { title: 'Work', value: 'work' },
  { title: 'Volunteer', value: 'volunteer' },
];

const EXPERIENCE_STATUS_OPTS: { title: string, value: string }[] = [
  { title: 'Currently Involved', value: 'current' },
  { title: 'Formerly Involved', value: 'former' },
];

const PROJECTS_ID_LIST: string[] = await (async () => {
  const response = await client.fetch(PROJECT_IDENTIFIERS_QUERY);

  return Object.values(response).filter(value => value != null);
})();

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Experience Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Experience Type',
      type: 'string',
      options: {
        list: EXPERIENCE_TYPE_OPTS,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurb',
      type: 'string',
      description: 'Brief, one-sentence summary.',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'description',
      type: 'string',
      description: 'Slightly deeper experience explanation for experience profile hero.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      type: 'text',
      rows: 8,
      description: 'Most detailed experience explanation.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: EXPERIENCE_STATUS_OPTS,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: PROJECTS_ID_LIST
          }
        })
      ],
      description: 'A list of project ids that were completed in this experience.'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ document }) => document?.status === 'current',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const status = context.document?.status;

          if (status === 'former' && !value) {
            return 'End date is required when the status is former.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: 'Upload an image logo for the experience profile hero.',
      options: {
        hotspot: false,
      },
    }),
  ],
});
