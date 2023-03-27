import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenValidatorService } from './token-validator/token-validator.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TokenValidatorService],
})
export class AppModule {}
