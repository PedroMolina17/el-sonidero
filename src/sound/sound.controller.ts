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
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('sound')
export class SoundController {
  constructor(private readonly soundService: SoundService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('sound_url', {
      storage: diskStorage({
        destination: './uploads/sounds',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `sound-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createSoundDto: CreateSoundDto,
  ) {
    const fileUrl = `/uploads/sounds/${file.filename}`;

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
