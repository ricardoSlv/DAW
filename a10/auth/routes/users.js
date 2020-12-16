import { Router } from 'express';
import passport from 'passport';
var router = Router();

router.get('/login', (req, res,) => {
  console.log('Login: ',req.sessionID)
  res.render('login')
});

router.get('/logout', (req, res,) => {
  req.logout()
  res.redirect('/')
});

router.post('/login', passport.authenticate('local') ,(req, res,_next) => {
  console.log(req.body)
  console.log(req.user)
  res.redirect('/protegida')
});

export default router;
