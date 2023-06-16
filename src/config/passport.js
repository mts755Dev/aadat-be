import passport from 'passport'
import jwtStrategy from './passport/jwtStrategy.js'
import { localStrategyLogin } from './passport/localStrategy.js'
import { googleStrategyLogin } from './passport/googleStrategy.js'

passport.use(jwtStrategy)
passport.use(googleStrategyLogin)
passport.use('signin', localStrategyLogin)

export default passport
