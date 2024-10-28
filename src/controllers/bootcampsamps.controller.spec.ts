import { Test, TestingModule } from '@nestjs/testing';
import { BootcampsampsController } from './bootcampsamps.controller';

describe('BootcampsampsController', () => {
  let controller: BootcampsampsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BootcampsampsController],
    }).compile();

    controller = module.get<BootcampsampsController>(BootcampsampsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
