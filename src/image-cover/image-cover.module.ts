import { Module } from '@nestjs/common';
import { ImageCoverService } from './image-cover.service';
import { ImageCoverController } from './image-cover.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ImageCoverController],
  providers: [ImageCoverService],
  imports: [PrismaModule],
})
export class ImageCoverModule {}
