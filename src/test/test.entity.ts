import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity('test')
export class TestEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') name: string;
    @Column() age: number;
    @Column('longtext') description: string;
}