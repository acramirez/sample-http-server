import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class TokenValidatorService {
  validate(token: string): any {
    switch (token) {
      case '':
        throw new UnauthorizedException();
        break;
      case '':
        throw new NotFoundException();
        break;
      case '':
        throw new InternalServerErrorException();
        break;
      case '':
        return { status: 200, data: 'OK' };
        break;
      default:
        throw new InternalServerErrorException();
        break;
    }
  }
}
