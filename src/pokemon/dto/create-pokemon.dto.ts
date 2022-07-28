import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    //IsInt, IsPositive and minimum value of 1
    @IsInt()
    @IsPositive()
    @Min(1)
    number: number;

    //IsString and Minlength 1
    @IsString()
    @MinLength(1)
    name: string;
}
