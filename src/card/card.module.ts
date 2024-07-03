import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Card } from './entities/card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card])
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
