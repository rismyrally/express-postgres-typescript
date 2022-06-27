import { InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import Project from './project';
import ProjectAssignment from './projectAssignment';

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

  @BelongsToMany(() => Project, () => ProjectAssignment)
  declare projects: CreationOptional<Project[]>;
}

export default User;
