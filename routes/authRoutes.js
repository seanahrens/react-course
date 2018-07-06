const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/auth/google/callback', (req, res) => {
    res.send(
      "Welcome! You are now logged in! <br/> <a href='/api/current_user/'>Current User</a> | <a href='/api/logout/'>Log Out</a> | <a href='/auth/google/'>Log In</a>"
    );
  });

  app.get('/', (req, res) => {
    res.send(
      "<a href='/api/current_user/'>Current User</a> | <a href='/api/logout/'>Log Out</a> | <a href='/auth/google/'>Log In</a>"
    );
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
