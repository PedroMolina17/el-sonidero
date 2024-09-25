import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SoundService } from './sound.service';
import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
@Controller('sound')
export class SoundController {
  constructor(
    private readonly soundService: SoundService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('sound_url'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createSoundDto: CreateSoundDto,
  ) {
    console.log('Archivo recibido:', file);
    const uploadResult = await this.cloudinaryService.uploadFile(file);
    const fileUrl = uploadResult.secure_url;

    createSoundDto.name = fileUrl;

    return this.soundService.create(createSoundDto);
  }

  @Get()
  findAll() {
    return this.soundService.getAllSounds();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soundService.getSoundById(+id);
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
