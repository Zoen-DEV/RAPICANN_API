import { user } from "../models/user.model";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

export const UsersController = {
  async getUsers(req, res) {
    // const {DNI, EMAIL, FULL_NAME, PASSWORD, NACIONALITY, SOCIO, ACTIVITY} = req.body
    const { EMAIL, PASSWORD } = req.body;
    try {
      const userInfo = await user.findOne({ where: { EMAIL } });

      if (!userInfo) {
        res.send("email incorrecto");
      }

      if (!bcrypt.compareSync(PASSWORD, userInfo.PASSWORD)) {
        res.send("contraseña incorrecta");
      }

      res.send("el get salio bien");
    } catch (error) {
      return res.send(error);
    }
  },

  async postUsers(req, res) {
    const { DNI, EMAIL, FULL_NAME, PASSWORD, NACIONALITY, SOCIO, ACTIVITY } =
      req.body;
    try {
      const userCheck = await user.findOne({ where: { EMAIL } });

      if (!userCheck) {
        let PASSWORD_HASH = bcrypt.hashSync(PASSWORD, salt);

        const newUser = await user.create({
          DNI,
          EMAIL,
          FULL_NAME,
          NACIONALITY,
          SOCIO,
          ACTIVITY,
          PASSWORD: PASSWORD_HASH,
        });

        res.send({
          newUser: {
            FULL_NAME: newUser.FULL_NAME,
            NACIONALITY: newUser.NACIONALITY,
            SOCIO: newUser.SOCIO,
            ACTIVITY: newUser.ACTIVITY,
          },
        });
      }

      res.send("ya existe un usuario registrado con este correo");
    } catch (error) {
      return res.send(error);
    }
  }
};
