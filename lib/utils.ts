export const isNullOrEmptyString = (value: string | null | undefined): value is null | undefined | "" =>
  !value || value.trim() === "";

export const processString = (value?: string | null): string | undefined =>
  isNullOrEmptyString(value) ? undefined : value.trim();