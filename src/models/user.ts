import { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  declare id: CreationOptional<string>;

  @AllowNull(false)
  @Column
  declare name: string;

  @AllowNull(false)
  @Unique
  @Column
  declare email: string;

  @AllowNull(false)
  @Column
  declare password: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
    User.belongsToMany(models.Project, {
      through: models.ProjectAssignment,
    });
  }
}

export default User;
