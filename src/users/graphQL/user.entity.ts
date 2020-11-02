import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
@InputType('User')
export class Users {
  @PrimaryColumn()
  @Field()
  id: number;

  @Column()
  @Field({ nullable: true })
  firstName: string;

  @Column()
  @Field({ nullable: true })
  lastName: string;

  @Column()
  @Field({ nullable: true })
  email: string;

  @Column()
  @Field({ nullable: true })
  phone: string;

  @Column()
  @Field({ nullable: true })
  city: string;

  @Column()
  @Field({ nullable: true })
  country: string;
}
