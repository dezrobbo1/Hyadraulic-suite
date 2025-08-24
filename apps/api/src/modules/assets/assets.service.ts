import { Injectable } from '@nestjs/common'; import { PrismaService } from '../../prisma.service.js'
@Injectable() export class AssetsService {
  constructor(private prisma: PrismaService){}
  list(){ return this.prisma.asset.findMany({ orderBy:{ createdAt:'desc' } }) }
  create(data:any){ return this.prisma.asset.create({ data }) }
}
