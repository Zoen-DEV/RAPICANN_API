import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const vegetal = sequelize.define(
  "vegetal",
  {
    NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    THC: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CBD: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SABOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EFFECT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    IMAGE: {
      type: DataTypes.STRING,
    },
    PRICE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    STOCK: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "vegetal",
  }
);
