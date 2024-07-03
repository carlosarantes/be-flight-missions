import { Test, TestingModule } from '@nestjs/testing';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';

describe('AppController', () => {
  let appController: ColumnController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ColumnController],
      providers: [ColumnService],
    }).compile();

    appController = app.get<ColumnController>(ColumnController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAll()).toBeTruthy();
    });
  });
});
