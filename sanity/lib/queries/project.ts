import { defineQuery } from "next-sanity";

const PROJECT_PROJECTION = `
  _id,
  id,
  title,
  type,
  blurb,
  description,
  longDescription,
  stage,
  techStack,
  experience,
  links {
    web,
    ios,
    android,
    other
  },
  github,
  startDate,
  releaseDate,
  deprecationDate,
  "logo": logo.asset->url,
  img
`;

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"]
    | order(
      title desc
    ) {
    ${PROJECT_PROJECTION}
  }
`);

export const PROJECT_BY_IDENTIFIER_QUERY = defineQuery(`
  *[
    _type == "project" &&
    (
      lower(id) == $identifier
    )
  ][0] {
    ${PROJECT_PROJECTION}
  }
`);

export const PROJECT_IDENTIFIERS_QUERY = defineQuery(`
  *[_type == "project"].id
`);
