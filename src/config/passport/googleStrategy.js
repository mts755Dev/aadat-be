import UserModel from '../../models/User.js'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'

export const googleStrategyLogin = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8564/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await UserModel.findOne({ email: profile.emails[0].value });
    if (!user) {
      user = new UserModel({
        name: profile.displayName,
        email: profile.emails[0].value,
      });

      await user.save();
    }
    done(null, user);
  } catch (error) {
    console.log(error)
    done(error);
  }
})