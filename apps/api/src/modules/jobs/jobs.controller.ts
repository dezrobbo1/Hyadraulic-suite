import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common'
import { JobsService } from './jobs.service.js'
@Controller('jobs') export class JobsController {
  constructor(private svc: JobsService) {}
  @Get() list(){ return this.svc.list() }
  @Get(':id') get(@Param('id') id:string){ return this.svc.get(id) }
  @Post() create(@Body() data:any){ return this.svc.create(data) }
  @Put(':id') update(@Param('id') id:string,@Body() data:any){ return this.svc.update(id,data) }
  @Delete(':id') remove(@Param('id') id:string){ return this.svc.remove(id) }
}
