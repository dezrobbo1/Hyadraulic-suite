import { Module, Controller, Get } from '@nestjs/common'
import { PrismaService } from './prisma.service.js'
import { JobsModule } from './modules/jobs/jobs.module.js'
import { AssetsModule } from './modules/assets/assets.module.js'
@Controller('health') class Health { @Get() ok(){ return { ok:true, ts:new Date().toISOString() } } }
@Module({ imports:[JobsModule,AssetsModule], providers:[PrismaService], controllers:[Health] })
export class AppModule {}
