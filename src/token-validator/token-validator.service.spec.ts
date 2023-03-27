import { Test, TestingModule } from '@nestjs/testing';
import { TokenValidatorService } from './token-validator.service';

describe('TokenValidatorService', () => {
  let service: TokenValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenValidatorService],
    }).compile();

    service = module.get<TokenValidatorService>(TokenValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
