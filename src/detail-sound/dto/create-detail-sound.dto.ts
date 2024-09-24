import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDetailSoundDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    url_youtube: string;

    @IsString()
    url_comand: string;

    @IsDate()
    date: Date;

    @IsNumber()
    likes: number;

    @IsString()
    duration: string;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    imageCoverId: number;

    @IsNumber()
    soundId: number;
}
