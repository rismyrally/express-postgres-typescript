import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table
class Project extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
  @AllowNull(false)
  @Column
  declare title: string;

  @AllowNull(false)
  @Column
  declare status: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: any) {
    // define association here
    Project.belongsToMany(models.User, {
      through: models.ProjectAssignment,
    });
  }
}

export default Project;
