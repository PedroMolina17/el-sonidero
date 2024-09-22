import { Injectable } from '@nestjs/common';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';

@Injectable()
export class ImageCoverService {
  create(createImageCoverDto: CreateImageCoverDto) {
    return 'This action adds a new imageCover';
  }

  findAll() {
    return `This action returns all imageCover`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageCover`;
  }

  update(id: number, updateImageCoverDto: UpdateImageCoverDto) {
    return `This action updates a #${id} imageCover`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageCover`;
  }
}
