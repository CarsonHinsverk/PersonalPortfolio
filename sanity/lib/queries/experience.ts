import { defineQuery } from "next-sanity";

const EXPERIENCE_PROJECTION = `
  _id,
  id,
  title,
  position,
  type,
  blurb,
  description,
  longDescription,
  status,
  projects,
  startDate,
  endDate,
  "logo": logo.asset->url,
`;

export const EXPERIENCES_QUERY = defineQuery(`
  *[_type == "experience"]
    | order(
      title desc
    ) {
    ${EXPERIENCE_PROJECTION}
  }
`);

export const EXPERIENCE_BY_IDENTIFIER_QUERY = defineQuery(`
  *[
    _type == "experience" &&
    (
      lower(id) == $identifier
    )
  ][0] {
    ${EXPERIENCE_PROJECTION}
  }
`);

export const EXPERIENCE_IDENTIFIERS_QUERY = defineQuery(`
  *[_type == "experience"].id
`);
