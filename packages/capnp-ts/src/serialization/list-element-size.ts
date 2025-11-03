/**
 * @author jdiaz5513
 */

export const ListElementSize = {
  VOID: 0,
  BIT: 1,
  BYTE: 2,
  BYTE_2: 3,
  BYTE_4: 4,
  BYTE_8: 5,
  POINTER: 6,
  COMPOSITE: 7
} as const;

export type ListElementSize = typeof ListElementSize[keyof typeof ListElementSize];

// Reverse mapping for enum-like access: ListElementSize[0] -> "VOID"
const ListElementSizeNames: Record<ListElementSize, string> = {
  [ListElementSize.VOID]: "VOID",
  [ListElementSize.BIT]: "BIT",
  [ListElementSize.BYTE]: "BYTE",
  [ListElementSize.BYTE_2]: "BYTE_2",
  [ListElementSize.BYTE_4]: "BYTE_4",
  [ListElementSize.BYTE_8]: "BYTE_8",
  [ListElementSize.POINTER]: "POINTER",
  [ListElementSize.COMPOSITE]: "COMPOSITE",
};

// Export a function to get the name from a value (replaces ListElementSize[value])
export function getListElementSizeName(size: ListElementSize): string {
  return ListElementSizeNames[size] || String(size);
}

export const ListElementOffset = [
  0, // void
  0.125, // bit
  1, // byte
  2, // two byte
  4, // four byte
  8, // eight byte
  8, // pointer
  NaN // composite
];
