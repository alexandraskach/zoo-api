const jwt = require("jsonwebtoken");
const userService = require("../services/user-service");
// Récupérer le secret depuis les variables d'environnement
const SECRET = process.env.SECRET;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Error. Please enter the username and password",
    });
  }
  // Recherche d'un utilisateur avec le username et le password
  const user = await userService.findUser(email, password);

  if (user.length == 1) {
    const accessToken = jwt.sign(
      {
        firstname: user.firstname,
        lastname: user.lastname,
      },
      SECRET
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password is incorrect");
  }
};
