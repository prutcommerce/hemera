import { ramda } from 'src/deps'

const collectMelissaSchema = () => {
  const graphImporter = require?.context('src', true, /\.graphql$/)

  return graphImporter?.keys()
    .map(graphImporter)
    .map(module => module?.default)
    .reduce(ramda.concat, ``)
}

export const collectSchema = () => `
${collectMelissaSchema()}
`
