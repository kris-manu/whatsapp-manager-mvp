import { Body, Controller, Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';
@Injectable() export class AuthService {
 constructor(private prisma:PrismaService, private jwt:JwtService){}
 async login(email:string,password:string){ const a=await this.prisma.admin.findUnique({where:{email}}); if(!a || !(await bcrypt.compare(password,a.passwordHash))) throw new UnauthorizedException('Invalid credentials'); return {accessToken:this.jwt.sign({sub:a.id,email:a.email})}; }
}
@Controller('auth') export class AuthController { constructor(private auth:AuthService){} @Post('login') login(@Body() b:{email:string,password:string}){return this.auth.login(b.email,b.password);} }
