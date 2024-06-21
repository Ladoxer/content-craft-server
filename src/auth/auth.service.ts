import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signup(signupDto: SignUpDto): Promise<{token: string}> {
    const createdUser = await this.usersService.create(signupDto);

    const token = this.jwtService.sign({id: createdUser._id})

    return { token }
  }

  async login(loginDto: LoginDto): Promise<{token: string}> {
    const { email, password } = loginDto;

    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({id: user._id})

    return { token }
  }

}
