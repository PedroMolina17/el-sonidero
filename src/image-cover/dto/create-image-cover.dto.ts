import { IsString } from "class-validator";

export class CreateImageCoverDto {
    
    @IsString()
    img_url: string;

    @IsString()
    description: string;
}
