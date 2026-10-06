export function random(max: number, min: number = 0): number {
  const range = max - min
  const rand = Math.random()

  return Math.floor(min + (range * rand))
}

export function sample<T extends any>(data: T[]): T {
  const size = data.length
  const index = random(size)

  return data[index]
}