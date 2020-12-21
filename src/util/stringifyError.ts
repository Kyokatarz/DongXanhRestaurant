import { ValidationError } from 'express-validator'

export type ErrorObject = {
  value?: string
  msg: string
  param: string
  location?: string
}

export default (errors: ValidationError[]): string => {
  const messages = errors.map((obj: any) => obj.msg)
  const stringifiedMessage = messages.join(', ')
  return stringifiedMessage
}
