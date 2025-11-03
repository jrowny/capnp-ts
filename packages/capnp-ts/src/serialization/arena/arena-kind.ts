export const ArenaKind = {
  SINGLE_SEGMENT: 0,
  MULTI_SEGMENT: 1
} as const;

export type ArenaKind = typeof ArenaKind[keyof typeof ArenaKind];
