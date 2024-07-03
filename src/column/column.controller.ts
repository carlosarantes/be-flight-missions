import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column-dto';
import { UpdateColumnDto } from './dto/update-column-dto';

@Controller('columns')
export class ColumnController {
  constructor(private readonly service: ColumnService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    return this.service.create(createColumnDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateColumnDto: UpdateColumnDto) {
    return this.service.update(id, updateColumnDto);
  }

  @Delete()
  @HttpCode(204)
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
