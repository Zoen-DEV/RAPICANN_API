import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const partner = sequelize.define(
  "partner",
  {
    USER_ID: {
      type: DataTypes.INTEGER,
    },
    STATE: {
      type: DataTypes.BOOLEAN,
    },
    START_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    END_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CLUB_POINTS: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "partner",
  }
);
