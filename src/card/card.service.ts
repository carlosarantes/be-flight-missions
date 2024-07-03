import { Injectable } from '@nestjs/common';
import { Card } from './entities/card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card-dto';
import { UpdateCardDto } from './dto/update-card-dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>
  ){}

  getAll() {
    return this.cardRepository.find()
  }

  getById(id: number) {
    return this.cardRepository.findOneBy({ id })
  }

  create(createColumnDto: CreateCardDto) {
    return this.cardRepository.create(createColumnDto)
  }

  update(id: number, updateColumnDto: UpdateCardDto) {
    return this.cardRepository.update(id,  updateColumnDto)
  }

  delete(id: number) {
    return this.cardRepository.delete(id)
  }
}
