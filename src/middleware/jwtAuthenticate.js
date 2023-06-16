/* eslint-disable no-undef */
import passport from 'passport';

export function authenticateJWT(req, res, next) {
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    if (err) return next(err)
    if (!user || _.isEmpty(user)) {
      return next(info)
    } else {
      return next()
    }
  })(req, res, next)
};
