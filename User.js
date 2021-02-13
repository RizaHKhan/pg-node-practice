import pool from "./db.js";

export default class UserDAO {
  static async registerUser(user) {
    const { email, firstName, lastName, age } = user;
    try {
      const query = `
        INSERT INTO users VALUES
        ('${email}', '${firstName}', '${lastName}', ${age});
        `;

      await pool.query(query);
      return { success: true };
    } catch (e) {
      return { error: e };
    }
  }

  static async getUsers() {
    try {
      const query = ` SELECT * FROM users;
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
