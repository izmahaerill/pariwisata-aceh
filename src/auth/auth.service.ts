import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Response } from 'express';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup({ dto, res }: { dto: AuthDto; res: Response }) {
    const userIsExist = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (userIsExist)
      return res.status(HttpStatus.CONFLICT).json({
        message: ['The user with that email already exists'],
      });

    const hash = await argon.hash(dto.password);

    await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username || null,
        password: hash,
      },
    });

    res.status(HttpStatus.CREATED).json({
      success: true,
      message: ['signup success'],
    });
  }
}
