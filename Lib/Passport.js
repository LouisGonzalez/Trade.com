const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const crypt = require('./Helpers');
const Account = require('../Model/Querys/AccountModel');
const AccountModel = require('../Model/Initialization/Account');

passport.use('local.signup',new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
},async (req, user, password, done) => {
    pass = await crypt.encryptPassword(password);
    await Account.createAccountLogger(req, pass);     
    return done(null,user);
}))


passport.use('local.login', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
},async (req, user, password, done) => {
    
    const usuario = await AccountModel.findOne({where:{user:user}});    
    console.log(usuario);
    if(usuario != undefined){        
        const match = await crypt.matchPassword(password, usuario.password);
        console.log(match);
        if(true){
            return done(null, usuario.user);
        }else{
            return done(null, false);
        }
    }else{
        return done(null, false); 
    }
}))

passport.serializeUser((usr, done)=>{
    return done(null,usr);
})


passport.deserializeUser(async (usr,done)=>{
      const usuario = await AccountModel.findOne({where:{user:usr}});
      return done(null,usuario.user);
})