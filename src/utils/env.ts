import { z } from 'zod'

const envVariables = z.object({
  GATSBY_GUERNER_PHONE_NUMBER: z.string(),
  GATSBY_GUERNER_EMAIL_ADDRESS: z.string(),
  GATSBY_GUERNER_STREET_ADDRESS: z.string(),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

const env = envVariables.parse(process.env)

export { env }
