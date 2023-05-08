import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const product = sequelize.define(
  "product",
  {
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
    },
    EXTRACT: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    tableName: "product",
  }
);
