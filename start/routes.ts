/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const authController = () => import('#controllers/authentication_controller')
const feedController = () => import('#controllers/feeds_controller')
const topicController = () => import('#controllers/topics_controller')

// Authentication routes
router.on('/').renderInertia('home', { version: 6 })
router
  .group(() => {
    router.get('/login', [authController, 'showLogin'])
    router.get('/signup', [authController, 'showSignup'])
    router.post('/auth/signup', [authController, 'signup'])
    router.post('/auth/login', [authController, 'login'])
  })
  .use([middleware.guest()])
router.post('/auth/logout', [authController, 'logout']).use([middleware.auth()])

// Feeds route
router.get('/feed', [feedController, 'index']).use(middleware.auth())

// Topic route
router.get('/topics', [topicController, 'index']).use(middleware.auth())
// router.post
