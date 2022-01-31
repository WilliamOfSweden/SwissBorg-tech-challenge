export const getPercentageString = (
  percentage: number | undefined,
  text: string
) => {
  if (percentage === undefined) {
    return ''
  }

  return `(${percentage}% ${text})`
}
