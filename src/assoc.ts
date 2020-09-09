export function assoc<O extends Record<string, unknown>>(
  prop: keyof O,
  val: unknown,
  obj: O,
): O {
  return { ...obj, [prop]: val };
}
