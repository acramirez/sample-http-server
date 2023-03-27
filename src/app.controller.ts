import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TokenValidatorService } from './token-validator/token-validator.service';

@Controller()
export class AppController {
  constructor(private tokenValidatorService: TokenValidatorService) {}

  @Get(':token')
  validateToken(@Query('token') token: string): any {
    return this.tokenValidatorService.validate(token);
  }
}
