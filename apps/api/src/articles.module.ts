import { Module } from '@nestjs/common';
import { Body, Controller, Get, Injectable, Param, Post, Patch } from '@nestjs/common'; import { PrismaService } from './prisma.service';
@Injectable() class ArticlesService { constructor(private db:PrismaService){} list(){return this.db.article.findMany({orderBy:{updatedAt:'desc'}})} create(b:any){return this.db.article.create({data:{title:b.title,body:b.body,imageUrl:b.imageUrl,status:b.status||'DRAFT'}})} update(id:string,b:any){return this.db.article.update({where:{id},data:b})} }
@Controller('articles') class ArticlesController {constructor(private s:ArticlesService){} @Get() list(){return this.s.list()} @Post() create(@Body() b:any){return this.s.create(b)} @Patch(':id') update(@Param('id') id:string,@Body() b:any){return this.s.update(id,b)} }
@Module({controllers:[ArticlesController],providers:[ArticlesService,PrismaService]}) export class ArticlesModule{}
