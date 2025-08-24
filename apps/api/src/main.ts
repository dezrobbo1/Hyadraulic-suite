import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import helmet from 'helmet'
import cors from 'cors'
async function bootstrap(){
  const app = await NestFactory.create(AppModule, { logger: ['log','error','warn'] })
  app.use(helmet()); app.use(cors()); app.setGlobalPrefix('api')
  const port = process.env.PORT || 3000
  await app.listen(port as number)
  console.log(`API listening on :${port}/api`)
}
bootstrap()
