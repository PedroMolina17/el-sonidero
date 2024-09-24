import { Injectable } from '@nestjs/common';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Sound } from '@prisma/client';

@Injectable()
export class SoundService {

  constructor( private prismaService: PrismaService ){}

  async create(createSoundDto: CreateSoundDto){
    return await this.prismaService.sound.create({
      data: createSoundDto
    });
  }

  async getAllSounds(): Promise<Sound[]>{
    return await this.prismaService.sound.findMany();
  }

  async getSoundById( id: number ): Promise<Sound> {
    return await this.prismaService.sound.findUnique({ where: { id } });
  }

  async update(id: number, updateSoundDto: UpdateSoundDto) {
    return await this.prismaService.sound.update({
      where: { id },
      data: updateSoundDto,
    })
  }

  async remove(id: number) {
    return await this.prismaService.sound.delete({ where: { id } });
  }
}
