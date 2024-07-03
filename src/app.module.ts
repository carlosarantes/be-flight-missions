import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnModule } from './column/column.module';
import { CardModule } from './card/card.module';
import { Column } from './column/entities/column.entity';
import { Card } from './card/entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'flightmissions',
      entities: [Column, Card],
      synchronize: true,
    }),
    ColumnModule,
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
