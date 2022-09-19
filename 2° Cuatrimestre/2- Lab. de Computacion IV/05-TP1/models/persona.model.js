import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de persona
export const Persona = db.define(
  "Persona",
  {
    id: {
      field: "idPersona",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: "nombre", type: DataTypes.STRING(50) },
    apellido: { field: "apellido", type: DataTypes.STRING(50) },
    direccion: { field: "direccion", type: DataTypes.STRING(100) },
    email: { field: "email", type: DataTypes.STRING(80) },
    edad: { field: "edad", type: DataTypes.INTEGER(100) },
    altura: { field: "aaltura", type: DataTypes.DECIMAL(3) },
    peso: { field: "peso", type: DataTypes.DECIMAL(3) },
    
  },
  { tableName: "Personas", timestamps: false }
);
