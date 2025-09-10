import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './authDto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private readonly i18n: I18nService,
  ) {}

  async login(user: LoginDto) {
    if (user.username === 'admin' && user.password === '1234') {
      const payload = { sub: 1, username: user.username };
      return {
        message: this.i18n.t('translation.USER.SUCCESS.LOGIN'),
        data: {
          access_token: await this.jwt.signAsync(payload),
        },
      };
    }
    throw new UnauthorizedException(
      this.i18n.t('translation.USER.ERROR.INVALID_CREDENTIALS'),
    );
  }

  async register(user: RegisterDto) {
    const payload = { sub: 1, username: user.username };
    return {
      message: this.i18n.t('translation.USER.SUCCESS.REGISTER'),
      data: {
        access_token: await this.jwt.signAsync(payload),
      },
    };
  }
}
