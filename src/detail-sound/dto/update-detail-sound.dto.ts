import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailSoundDto } from './create-detail-sound.dto';

export class UpdateDetailSoundDto extends PartialType(CreateDetailSoundDto) {}
