import { Module } from '@nestjs/common';
import { SoundService } from './sound.service';
import { SoundController } from './sound.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  controllers: [SoundController],
  providers: [SoundService],
})
export class SoundModule {}
