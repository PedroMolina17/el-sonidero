import { Module } from '@nestjs/common';
import { DetailSoundService } from './detail-sound.service';
import { DetailSoundController } from './detail-sound.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DetailSoundController],
  providers: [DetailSoundService],
  imports: [PrismaModule]
})

export class DetailSoundModule {}
