import { PROJECT_BY_IDENTIFIER_QUERY_RESULT } from "@/sanity/types";
import { isNullOrEmptyString, processString } from "./utils";

export type ProjectType =
  'desktop app' | 'web app' | 'mobile app' | 'cross-device app' | 'machine learning' | 'game' |
  'cli' | 'api' | 'compiler' | 'graphics' | 'security' | 'network' | 'hardware' | 'robotics' | 'other';
export type ProjectStage = 'dev' | 'released' | 'deprecated';
export type ProjectLinkMap = {
  web?: string;
  ios?: string;
  android?: string;
  other?: string;
}
type ProjectSource = Exclude<PROJECT_BY_IDENTIFIER_QUERY_RESULT, null>;
export type ProjectImage = Exclude<ProjectSource['img'], null>;

export type ProjectProfile = {
  id: string;
  title: string;
  type: ProjectType;
  blurb: string;
  description: string;
  longDescription: string;
  stage: ProjectStage;
  techStack: string[];
  experience?: string;
  links: ProjectLinkMap;
  github?: string;
  startDate?: string;
  releaseDate?: string;
  deprecationDate?: string;
  logo?: string;
  img?: ProjectImage;
};

const normalizeProjectType = (
  value: string | null | undefined
): ProjectType => {
  const isValidValue = (
    value: string | null | undefined
  ): value is ProjectType =>
    value === 'desktop app' ||
    value === 'web app' ||
    value === 'mobile app' ||
    value === 'cross-device app' ||
    value === 'machine learning' ||
    value === 'game' ||
    value === 'cli' ||
    value === 'api' ||
    value === 'compiler' ||
    value === 'graphics' ||
    value === 'security' ||
    value === 'network' ||
    value === 'hardware' ||
    value === 'robotics';

  return isValidValue(value) ? value : 'other';
};

const normalizeProjectStage = (
  value: string | null | undefined
): ProjectStage => {
  const isValidValue = (
    value: string | null | undefined
  ): value is ProjectStage =>
    value === 'dev' || value === 'released' || value === 'deprecated';

  return isValidValue(value) ? value : 'dev';
}

const toStringArray = (values: Array<string | null> | null | undefined) =>
  (values ?? [])
    .filter((value): value is string => !isNullOrEmptyString(value))
    .map((value) => value.trim());

export const mapProject = (
  project: PROJECT_BY_IDENTIFIER_QUERY_RESULT
): ProjectProfile | null => {
  if (!project || isNullOrEmptyString(project.title)) return null;

  const id = processString(project.id)
  if (!id) return null;

  const blurb =
    processString(project.blurb ?? project.description) ?? '';
  const description =
    processString(project.description ?? project.blurb) ?? blurb;
  const longDescription =
    processString(project.longDescription ?? project.description ?? project.blurb) ?? blurb;

  return {
    id,
    title: project.title.trim(),
    type: normalizeProjectType(project.type),
    blurb,
    description,
    longDescription,
    stage: normalizeProjectStage(project.stage),
    techStack: toStringArray(project.techStack),
    experience: processString(project.experience),
    links: {
      web: processString(project.links?.web),
      ios: processString(project.links?.ios),
      android: processString(project.links?.android),
      other: processString(project.links?.other),
    },
    github: processString(project.github),
    startDate: processString(project.startDate),
    releaseDate: processString(project.releaseDate),
    deprecationDate: processString(project.deprecationDate),
    logo: processString(project.logo),
    img:
      project.img && project.img.asset?._ref
        ? (project.img as ProjectImage)
        : undefined,
  };
};
