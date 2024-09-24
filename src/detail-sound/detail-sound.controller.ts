import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailSoundService } from './detail-sound.service';
import { CreateDetailSoundDto } from './dto/create-detail-sound.dto';
import { UpdateDetailSoundDto } from './dto/update-detail-sound.dto';

@Controller('detail-sound')
export class DetailSoundController {
  constructor(private readonly detailSoundService: DetailSoundService) {}

  @Post()
  create(@Body() createDetailSoundDto: CreateDetailSoundDto) {
    return this.detailSoundService.create(createDetailSoundDto);
  }

  @Get()
  findAll() {
    return this.detailSoundService.getAllDetailSounds();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailSoundService.getDetailSoundById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailSoundDto: UpdateDetailSoundDto) {
    return this.detailSoundService.update(+id, updateDetailSoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailSoundService.remove(+id);
  }
}
