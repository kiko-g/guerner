const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ')
}

type Social = {
  shown: boolean
  label: string
  url: string
  svg: string[] // array of `d` entries for tag <path>
  viewBox?: string // svg `viewBox` (optional, deefined by the ? operator)
}

const socials: Social[] = []

export { classNames, socials }
