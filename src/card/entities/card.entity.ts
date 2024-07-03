import { Column } from "src/column/entities/column.entity"
import { Entity, PrimaryGeneratedColumn, Column as ColumnOrm, ManyToOne } from "typeorm"

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number

    @ColumnOrm()
    title: string

    @ColumnOrm()
    description?: string
    
    @ManyToOne(() => Column, (column) => column.cards)
    column: Column
    
    @ColumnOrm()
    status: string
}