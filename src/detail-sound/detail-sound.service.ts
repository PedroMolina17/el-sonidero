import { Injectable } from '@nestjs/common';
import { CreateDetailSoundDto } from './dto/create-detail-sound.dto';
import { UpdateDetailSoundDto } from './dto/update-detail-sound.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DetailSound } from '@prisma/client';

@Injectable()
export class DetailSoundService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDetailSoundDto: CreateDetailSoundDto) {
    return await this.prismaService.detailSound.create({
      data: createDetailSoundDto,
    });
  }

  async getAllDetailSounds(): Promise<DetailSound[]> {
    return await this.prismaService.detailSound.findMany({
      include: { sound: true },
    });
  }

  async getDetailSoundById(id: number): Promise<DetailSound> {
    return await this.prismaService.detailSound.findUnique({ where: { id } });
  }

  async getDetailSoundByName(name: string): Promise<DetailSound> {
    return await this.prismaService.detailSound.findFirst({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      include: { sound: true },
    });
  }
  async update(id: number, updateDetailSoundDto: UpdateDetailSoundDto) {
    return await this.prismaService.detailSound.update({
      where: { id },
      data: updateDetailSoundDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.detailSound.delete({ where: { id } });
  }
}
