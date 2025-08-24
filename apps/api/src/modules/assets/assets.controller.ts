import { Controller, Get, Body, Post } from '@nestjs/common'
import { AssetsService } from './assets.service.js'
@Controller('assets') export class AssetsController {
  constructor(private svc: AssetsService){}
  @Get() list(){ return this.svc.list() }
  @Post() create(@Body() data:any){ return this.svc.create(data) }
}
