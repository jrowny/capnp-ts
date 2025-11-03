/**
 * @author jdiaz5513
 */

export const PointerType = {
  STRUCT: 0,
  LIST: 1,
  FAR: 2,
  OTHER: 3
} as const;

export type PointerType = typeof PointerType[keyof typeof PointerType];
