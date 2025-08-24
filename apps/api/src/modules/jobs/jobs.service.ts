import { Injectable } from '@nestjs/common'; import { PrismaService } from '../../prisma.service.js'
@Injectable() export class JobsService {
  constructor(private prisma: PrismaService){}
  list(){ return this.prisma.job.findMany({ orderBy:{ createdAt:'desc' } }) }
  get(id:string){ return this.prisma.job.findUnique({ where:{ id } }) }
  create(data:any){ return this.prisma.job.create({ data }) }
  update(id:string, data:any){ return this.prisma.job.update({ where:{ id }, data }) }
  remove(id:string){ return this.prisma.job.delete({ where:{ id } }) }
}
