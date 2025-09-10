import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './authDto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Post('register')
  register(@Body() user: RegisterDto) {
    return this.authService.register(user);
  }
}
