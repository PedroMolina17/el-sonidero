import { PartialType } from '@nestjs/mapped-types';
import { CreateSoundDto } from './create-sound.dto';

export class UpdateSoundDto extends PartialType(CreateSoundDto) {}
