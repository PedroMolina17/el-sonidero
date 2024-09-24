import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { ImageCoverModule } from './image-cover/image-cover.module';
import { SoundModule } from './sound/sound.module';
import { DetailSoundModule } from './detail-sound/detail-sound.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CategoryModule, 
    ImageCoverModule, 
    SoundModule, 
    DetailSoundModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
