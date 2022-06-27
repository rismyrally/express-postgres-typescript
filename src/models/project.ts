import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { AllowNull, BelongsToMany, Column, Model, Table } from 'sequelize-typescript';

import ProjectAssignment from './projectAssignment';
import User from './user';

@Table
class Project extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
  @AllowNull(false)
  @Column
  declare title: string;

  @AllowNull(false)
  @Column
  declare status: string;

  @BelongsToMany(() => User, () => ProjectAssignment)
  declare users: CreationOptional<User[]>;
}

export default Project;
