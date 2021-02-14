import UserDAO from "./User.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export class User {
  async comparePassword(plainText) {
    return await bcrypt.compare(plainText, this.password);
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
