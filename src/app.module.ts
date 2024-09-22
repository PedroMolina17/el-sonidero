import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { ImageCoverModule } from './image-cover/image-cover.module';
import { SoundModule } from './sound/sound.module';
import { DetailSoundModule } from './detail-sound/detail-sound.module';

@Module({
  imports: [PrismaModule, CategoryModule, ImageCoverModule, SoundModule, DetailSoundModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
