import { IsString } from "class-validator";

export class CreateSoundDto {

    @IsString()
    name: string;

}
