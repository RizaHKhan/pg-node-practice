import UserDAO from "./User.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export class User {
  async comparePassword(plainText) {
    return await bcrypt.compare(plainText, hashedPassword);
  }
}

export default class userController {
  static async registerUser(req, res) {
    try {
      const { email, username, password } = req.body;
      const hash = bcrypt.hashSync(password, saltRounds);
      const results = await UserDAO.registerUser(email, hash, username);

      if (results.success) {
        res.send({ success: true });
      }
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      const { rows: user } = await UserDAO.getUser(email);
      if (!user) {
        throw new Error({ error: "User Does Not Exist" });
      }

      const passwordCheck = await User.comparePassword(
        password,
        user[0].password
      );
      console.log(passwordCheck);
      if (!passwordCheck) {
        throw new Error({ error: "Duplicate" });
      }

      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  static async getUsers(req, res) {
    try {
      const { rows: users } = await UserDAO.getUsers();
      console.table(users);
      res.send(users);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  static async deleteUserByEmail(req, res) {
    try {
      const { email } = req.params;
      await UserDAO.deleteUserByEmail(email);
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }
}
