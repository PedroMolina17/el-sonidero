import { PartialType } from '@nestjs/mapped-types';
import { CreateImageCoverDto } from './create-image-cover.dto';

export class UpdateImageCoverDto extends PartialType(CreateImageCoverDto) {}
