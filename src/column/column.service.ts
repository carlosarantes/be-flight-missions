import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column } from './entities/column.entity';
import { Repository } from 'typeorm';
import { CreateColumnDto } from './dto/create-column-dto';
import { UpdateColumnDto } from './dto/update-column-dto';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Column)
    private readonly columnRepository: Repository<Column>
  ){}

  getAll() {
    return this.columnRepository.find()
  }

  getById(id: number) {
    return this.columnRepository.findOneBy({ id })
  }

  create(createColumnDto: CreateColumnDto) {
    return this.columnRepository.create(createColumnDto)
  }

  update(id: number, updateColumnDto: UpdateColumnDto) {
    return this.columnRepository.update(id,  updateColumnDto)
  }

  delete(id: number) {
    return this.columnRepository.delete(id)
  }
}
