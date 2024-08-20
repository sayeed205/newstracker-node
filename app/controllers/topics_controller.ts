import type { HttpContext } from '@adonisjs/core/http'

export default class TopicsController {
  index({ inertia, auth }: HttpContext) {
    const user = auth.user

    return inertia.render('topic/index', { user })
  }
  createTopic({}: HttpContext) {}
}
