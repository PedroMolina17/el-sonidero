import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { ImageCoverModule } from './image-cover/image-cover.module';
import { SoundModule } from './sound/sound.module';
import { DetailSoundModule } from './detail-sound/detail-sound.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    PrismaModule,
    CategoryModule,
    ImageCoverModule,
    SoundModule,
    DetailSoundModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    CloudinaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
