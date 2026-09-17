import { techMap } from "@/types/tech-maps";
import { defineArrayMember, defineField, defineType } from "sanity";
import { client } from "../lib/client";
import { EXPERIENCE_IDENTIFIERS_QUERY } from "../lib/queries/experience";

const PROJECT_TYPE_OPTS: { title: string, value: string }[] = [
    { title: 'Desktop App', value: 'desktop app' },
    { title: 'Web App', value: 'web app' },
    { title: 'Mobile App', value: 'mobile app' },
    { title: 'Cross-Device App', value: 'cross-device app' },
    { title: 'ML', value: 'machine learning' },
    { title: 'Game', value: 'game' },
    { title: 'CLI Tool', value: 'cli' },
    { title: 'API', value: 'api' },
    { title: 'Compiler', value: 'compiler' },
    { title: 'Graphics', value: 'graphics' },
    { title: 'Security', value: 'security' },
    { title: 'Network', value: 'network' },
    { title: 'Hardware', value: 'hardware' },
    { title: 'Robotics', value: 'robotics' }
];

const PROJECT_STAGE_OPTS: { title: string; value: string; }[] = [
    { title: 'In Development', value: 'dev' },
    { title: 'Released', value: 'released' },
    { title: 'Deprecated', value: 'deprecated' },
];

const TECH_STACK_KEYS = Object.keys(techMap).sort((a, b) =>
    a.localeCompare(b, 'en')
);

const normalizeTechKey = (key: string): string =>
    key.trim().toLowerCase().replace(/\s+/g, ' ');

const NORMALIZED_TECH_STACK_KEYS = new Set<string>(
    TECH_STACK_KEYS.map((key) => normalizeTechKey(key))
);

const TECH_STACK_OPTS = Array.from(NORMALIZED_TECH_STACK_KEYS);

const isAllowedTechStackKey = (key: string): boolean =>
    NORMALIZED_TECH_STACK_KEYS.has(normalizeTechKey(key));

const EXPERIENCES_ID_LIST = await (async () => {
  const response = await client.fetch(EXPERIENCE_IDENTIFIERS_QUERY);

  return Object.values(response).filter(value => value != null);
})();

export const projectType = defineType({
  name: 'project',
  title: 'Project',
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
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: PROJECT_TYPE_OPTS
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
      description: 'Slightly deeper project explanation for project profile hero.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      type: 'text',
      rows: 8,
      description: 'Most detailed project explanation.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stage',
      title: 'Stage',
      type: 'string',
      options: {
        list: PROJECT_STAGE_OPTS,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: TECH_STACK_OPTS,
          },
        }),
      ],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.unique().custom((values) => {
        if (!Array.isArray(values) || values.length === 0) return true;

        const invalid = values.find(
          (value) => typeof value === 'string' && !isAllowedTechStackKey(value)
        );

        return (
          !invalid ||
          `Unsupported tech stack value "${invalid}". Use one of the predefined options.`
        );
      }),
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      options: {
        list: EXPERIENCES_ID_LIST
      },
      description: 'Associated experience where this project was made.',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        defineField({
          name: 'web',
          title: 'Web',
          type: 'url',
        }),
        defineField({
          name: 'ios',
          title: 'iOS',
          type: 'url',
        }),
        defineField({
          name: 'android',
          title: 'Android',
          type: 'url',
        }),
        defineField({
          name: 'other',
          title: 'Other/CLI/etc.',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'string',
      description: "Link to project's GitHub page if available."
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      hidden: ({ document }) => document?.stage === 'dev',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const stage = context.document?.stage;

          if ((stage === 'released' || stage === 'unsupported') && !value) {
            return 'Release date is required when the stage is released or unsupported.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'deprecationDate',
      title: 'Deprecation Date',
      type: 'date',
      hidden: ({ document }) => document?.stage !== 'unsupported',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const stage = context.document?.stage;

          if ((stage === 'unsupported') && !value) {
            return 'Deprecation date is required when the stage is unsupported.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: 'Upload an image logo for the project profile hero.',
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: 'img',
      title: 'Background Image',
      type: 'image',
      description: 'Image displayed on the project card.',
    }),
  ],
});
