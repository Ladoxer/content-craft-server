import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupDto: SignUpDto): Promise<{token: string}> {
    return this.authService.signup(signupDto);
  }

  @Get('login')
  async login(@Body() loginDto: LoginDto): Promise<{token: string}> {
    return this.authService.login(loginDto);
  }
}
