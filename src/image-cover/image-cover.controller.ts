import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';

@Controller('image-cover')
export class ImageCoverController {
  constructor(private readonly imageCoverService: ImageCoverService) {}

  @Post()
  create(@Body() createImageCoverDto: CreateImageCoverDto) {
    return this.imageCoverService.create(createImageCoverDto);
  }

  @Get()
  findAll() {
    return this.imageCoverService.getAllImageCovers();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.imageCoverService.getImageCoverById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImageCoverDto: UpdateImageCoverDto,
  ) {
    return this.imageCoverService.update(+id, updateImageCoverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.imageCoverService.remove(+id);
  }
}
