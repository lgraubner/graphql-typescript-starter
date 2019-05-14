import { Router } from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
// import { Strategy as TwitterStrategy } from 'passport-twitter'

import dotenv from 'dotenv'
import createError from 'http-errors'

import { getUserByEmail } from '../repositories/user'

import User from '../entities/User'

dotenv.config()

const authRouter = Router()

passport.serializeUser(function(user: User, done): void {
  done(null, user)
})

passport.deserializeUser(function(user: User, done): void {
  done(null, user)
})

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (username, password, done): Promise<any> => {
      try {
        const user = await getUserByEmail(username)
        if (!user) {
          return done(null, false)
        }

        const match = await user.verifyPassword(password)
        if (!match) {
          return done(null, false)
        }

        return done(null, user)
      } catch (err) {
        return done(err)
      }
    }
  )
)

authRouter.post('/login', function(req, res, next): void {
  passport.authenticate('local', function(err, user): any {
    if (err) {
      return next(err)
    }

    if (!user) {
      return next(createError(401, 'Invalid credentials'))
    }

    req.logIn(user, function(err): any {
      if (err) {
        return next(err)
      }

      // eslint-disable-next-line
      const { password, ...serializedUser } = user
      return res.json(serializedUser)
    })
  })(req, res, next)
})

// const { TWITTER_CONSUMER_KEY = '', TWITTER_CONSUMER_SECRET = '' } = process.env

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: TWITTER_CONSUMER_KEY,
//       consumerSecret: TWITTER_CONSUMER_SECRET,
//       callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
//     },
//     function(token, tokenSecret, profile, cb): void {
//       // @TODO: upsert user
//     }
//   )
// )

// authRouter.get('/auth/twitter', passport.authenticate('twitter'))

// authRouter.get(
//   '/auth/twitter/callback',
//   passport.authenticate('twitter'),
//   function(req, res) {
//     // @TODO:
//   }
// )

authRouter.get('/logout', function(req, res): void {
  req.logout()
  res.json({
    data: null
  })
})

export default authRouter
