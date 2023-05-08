import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const extract = sequelize.define(
  "extract",
  {
    NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    USES: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    RECOMMENDATION: {
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
    tableName: "extract",
  }
);
