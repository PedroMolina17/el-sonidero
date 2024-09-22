import { Module } from '@nestjs/common';
import { ImageCoverService } from './image-cover.service';
import { ImageCoverController } from './image-cover.controller';

@Module({
  controllers: [ImageCoverController],
  providers: [ImageCoverService],
})
export class ImageCoverModule {}
