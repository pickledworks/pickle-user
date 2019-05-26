import { Entity, Column } from "typeorm";
import { PickleUserBaseEntity } from "./PickleUserBaseEntity";

@Entity()
export class User extends PickleUserBaseEntity {
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}
