import { Model, DataTypes } from "sequelize";

class customer extends Model {
  static init(sequelize) {
    super.init(
      {
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        username: DataTypes.STRING(25),
        encrypted_psw: DataTypes.STRING(80),
        user_admin: DataTypes.BOOLEAN,
        id_ambient: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

export default customer;
