import { Card } from "src/card/entities/card.entity"
import { Entity, PrimaryGeneratedColumn, Column as ColumnOrm, OneToMany } from "typeorm"

@Entity()
export class Column {
    @PrimaryGeneratedColumn()
    id: number

    @ColumnOrm()
    title: string

    @OneToMany(() => Card, (card) => card.column, { cascade: true })
    cards: Card[]
}