import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import Project from './project';
import User from './user';

@Table
class ProjectAssignment extends Model<InferAttributes<ProjectAssignment>, InferCreationAttributes<ProjectAssignment>> {
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  declare userId: string;

  @ForeignKey(() => Project)
  @Column
  declare projectId: number;
}

export default ProjectAssignment;
