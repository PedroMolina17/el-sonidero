import { Injectable } from '@nestjs/common';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageCover } from '@prisma/client';

@Injectable()
export class ImageCoverService {


  constructor( private readonly prismaService: PrismaService){}

  async create(createImageCoverDto: CreateImageCoverDto) {
    return await this.prismaService.imageCover.create({
      data: createImageCoverDto,
    })
  }

  async getAllImageCovers(): Promise<ImageCover[]> {
    return await this.prismaService.imageCover.findMany();
  }

  async getImageCoverById(id: number): Promise<ImageCover> {
    return await this.prismaService.imageCover.findUnique({ where: { id } });
  }

  async update(id: number, updateImageCoverDto: UpdateImageCoverDto) {
    return await this.prismaService.imageCover.update({
      where: { id },
      data: updateImageCoverDto,
    })
  }

  async remove(id: number) {
    return await this.prismaService.imageCover.delete({ where: { id } });
  }
}
