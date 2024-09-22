import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoundService } from './sound.service';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';

@Controller('sound')
export class SoundController {
  constructor(private readonly soundService: SoundService) {}

  @Post()
  create(@Body() createSoundDto: CreateSoundDto) {
    return this.soundService.create(createSoundDto);
  }

  @Get()
  findAll() {
    return this.soundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soundService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoundDto: UpdateSoundDto) {
    return this.soundService.update(+id, updateSoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soundService.remove(+id);
  }
}
