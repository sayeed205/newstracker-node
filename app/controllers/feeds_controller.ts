import type { HttpContext } from '@adonisjs/core/http'

export default class FeedsController {
  index({ inertia, auth }: HttpContext) {
    const user = auth.user
    return inertia.render('feed', { user })
  }
}
