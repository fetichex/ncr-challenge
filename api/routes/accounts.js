import { getAllAccounts } from '../utils.js'

export default function (fastify, opts, done) {
  fastify.get('/', async function (_, reply) {
    try {
      const data = await getAllAccounts()
      return reply.send(data)
    } catch (e) {
      fastify.log.error(e)
    }
  })
  done()
}
