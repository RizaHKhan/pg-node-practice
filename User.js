import pool from "./db.js";

export default class UserDAO {
  static async registerUser(email, password, username) {
    try {
      const query = `
        INSERT INTO users(email, username, password) VALUES('${email}', '${username}', '${password}');
      `;
      await pool.query(query);
      return { success: true };
    } catch (e) {
      return { error: e };
    }
  }

  static async getUsers() {
    try {
      const query = `SELECT * FROM users;
        `;
      return await pool.query(query);
    } catch (e) {
      return { error: e };
    }
  }

  static async deleteUserByEmail(email) {
    try {
      const query = `
        DELETE FROM users WHERE email = '${email}';
      `;
      await pool.query(query);
      return { success: true };
    } catch (e) {
      return { error: e };
    }
  }
}
