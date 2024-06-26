import { BillMaterialDetail } from 'src/bill-material-details/entities/bill-material-detail.entity';
import { CheckMaterialDetail } from 'src/check-material-details/entities/check-material-detail.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Materail {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name: string;
  @Column()
  min_quantity: number;
  @Column()
  quantity: number;
  @Column()
  unit: string;
  @Column()
  unit_price: number;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => CheckMaterialDetail, (cmtd) => cmtd.material)
  checkMaterialDetail: CheckMaterialDetail[];

  @ManyToOne(() => BillMaterialDetail, (bmd) => bmd.material)
  billMaterialDetail: BillMaterialDetail;
}
