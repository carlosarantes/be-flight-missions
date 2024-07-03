import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card-dto';
import { UpdateCardDto } from './dto/update-card-dto';

@Controller()
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.service.create(createCardDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCardDto: UpdateCardDto) {
    return this.service.update(id, updateCardDto);
  }

  @Delete()
  @HttpCode(204)
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
