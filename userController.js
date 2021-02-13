import User from "./User.js";

export default class userController {
  static async addUser(req, res) {
    try {
      const results = await User.addUser(req.body);

      if (results.success) {
        res.send({ success: true });
      }
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  static async getUsers(req, res) {
    try {
      const { rows: users } = await User.getUsers();
      console.table(users);
      res.send(users);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  static async deleteUserByEmail(req, res) {
    try {
      const { email } = req.params;
      await User.deleteUserByEmail(email);
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }
}
