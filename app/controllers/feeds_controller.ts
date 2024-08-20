import type { HttpContext } from '@adonisjs/core/http'

export default class FeedsController {
  index({ inertia }: HttpContext) {
    return inertia.render('feed')
  }
}
