import { EXPERIENCE_BY_IDENTIFIER_QUERY_RESULT } from "@/sanity/types";
import { isNullOrEmptyString, processString } from "./utils";

export type ExperienceType = 'college' | 'research' | 'work' | 'volunteer';
export type ExperienceStatus = 'current' | 'former';

export type ExperienceProfile = {
  id: string;
  title: string;
  position?: string;
  type: ExperienceType;
  blurb: string;
  description: string;
  longDescription: string;
  status: ExperienceStatus;
  projects: string[];
  startDate: string;
  endDate: string;
  logo?: string,
};

const normalizeExperienceType = (
  value: string | null | undefined
): ExperienceType => {
  const isValidValue = (
    value: string | null | undefined
  ): value is ExperienceType =>
      value === 'college' || value === 'research' || value === 'work' || value === 'volunteer'

  return isValidValue(value) ? value : 'college'
}

const normalizeExperienceStatus = (
  value: string | null | undefined
): ExperienceStatus => {
  const isValidValue = (
    value: string | null | undefined
  ): value is ExperienceStatus =>
      value === 'current' || value === 'former'

  return isValidValue(value) ? value : 'current'
};

const toStringArray = (values: Array<string | null> | null | undefined) =>
  (values ?? [])
    .filter((value): value is string => !isNullOrEmptyString(value))
    .map((value) => value.trim());

export const mapExperience = (
  experience: EXPERIENCE_BY_IDENTIFIER_QUERY_RESULT
): ExperienceProfile | null => {
  if (!experience || isNullOrEmptyString(experience.title)) return null;

  const id = processString(experience.id)
  if (!id) return null;

  const blurb =
    processString(experience.blurb ?? experience.description) ?? '';
  const description =
    processString(experience.description ?? experience.blurb) ?? blurb;
  const longDescription =
    processString(experience.longDescription ?? experience.description ?? experience.blurb) ?? blurb;

  return {
    id,
    title: experience.title.trim(),
    position: processString(experience.position),
    type: normalizeExperienceType(experience.type),
    blurb,
    description,
    longDescription,
    status: normalizeExperienceStatus(experience.status),
    projects: toStringArray(experience.projects),
    startDate: processString(experience.startDate) ?? '',
    endDate: processString(experience.endDate) ?? '',
    logo: processString(experience.logo),
  }
};
