import { Extensions, getSchema } from '@tiptap/core'
import { DOMParser } from '@tiptap/pm/model'
import { parseHTML } from 'zeed-dom'

export function generateJSON(html: string, extensions: Extensions, options?: any): Record<string, any> {
  const schema = getSchema(extensions)
  const dom = parseHTML(html) as unknown as Node

  return DOMParser.fromSchema(schema).parse(dom, options).toJSON()
}
