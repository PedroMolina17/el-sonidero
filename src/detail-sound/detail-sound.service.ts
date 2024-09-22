import { Injectable } from '@nestjs/common';
import { CreateDetailSoundDto } from './dto/create-detail-sound.dto';
import { UpdateDetailSoundDto } from './dto/update-detail-sound.dto';

@Injectable()
export class DetailSoundService {
  create(createDetailSoundDto: CreateDetailSoundDto) {
    return 'This action adds a new detailSound';
  }

  findAll() {
    return `This action returns all detailSound`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailSound`;
  }

  update(id: number, updateDetailSoundDto: UpdateDetailSoundDto) {
    return `This action updates a #${id} detailSound`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailSound`;
  }
}
