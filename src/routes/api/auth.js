import express from 'express';
import passport from 'passport';
import { signIn, signUp } from '../../controllers/auth.js';

const authRouter = express.Router();

authRouter
  .route('/signup')
  .post(signUp)

authRouter
  .route('/signin')
  .post(passport.authenticate('signin', { session: false, failWithError: true }), signIn)

authRouter
  .route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] }))

authRouter
  .route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/signin'
  }))
export default authRouter;
