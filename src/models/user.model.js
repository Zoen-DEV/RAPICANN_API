import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const user = sequelize.define(
  "user",
  {
    DNI: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    FULL_NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NACIONALITY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SOCIO: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    ACTIVITY: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

  },
  {
    timestamps: false,
    tableName: "user",
  }
);