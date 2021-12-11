import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";
import User from "./User";

@Entity("buy_history")
export default class BuyRecord {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  data: number;

  @Column()
  total: number;

  @Column()
  status: string;

  @Column()
  enviado: boolean;

  @Column()
  shipAddress: string;

  @Column()
  shipmentPrice: number;

  @Column()
  taxPrice: number;

  @Column()
  paymentMethod: string;

  @ManyToOne(() => User, (user) => user.buyRecords)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToMany(() => Product, {
    eager: true,
  })
  @JoinTable()
  products: Product[];
}
