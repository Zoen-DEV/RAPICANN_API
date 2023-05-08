export const UsersController = {
  async getUsers(req, res) {
    try {
      res.send("el get salio bien");
    } catch (error) {
      return res.send(error);
    }
  },

  async postUsers(req, res) {
    try {
    } catch (error) {
      return res.send(error);
    }
  },

  async putUsers(req, res) {
    try {
    } catch (error) {
      return res.send(error);
    }
  },
};
