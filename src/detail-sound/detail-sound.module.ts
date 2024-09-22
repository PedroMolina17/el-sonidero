import { Module } from '@nestjs/common';
import { DetailSoundService } from './detail-sound.service';
import { DetailSoundController } from './detail-sound.controller';

@Module({
  controllers: [DetailSoundController],
  providers: [DetailSoundService],
})
export class DetailSoundModule {}
