const jwt = require("jsonwebtoken");
// Récupérer le secret depuis les variables d'environnement

exports.login = async (req, res) => {
  const { username, password } = req.body;
  // Recherche d'un utilisateur avec le username et le password

  if (user) {
    const accessToken = jwt.sign(
      {
        username: user.username,
        role: user.role,
      },
      secret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password is incorrect");
  }
};
