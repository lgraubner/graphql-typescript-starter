function omit(input: object, keys: string | string[]): object {
  const output = {}

  for (const key in input) {
    if (
      (typeof keys === 'string' && keys !== key) ||
      (Array.isArray(keys) && keys.indexOf(key) === -1)
    ) {
      output[key] = input[key]
    }
  }

  return output
}

export default omit
