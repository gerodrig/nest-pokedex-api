import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document{

    @Prop({
        unique: true,
        index: true,
    })
    name: string;
//ignore keyvalue in error message
    @Prop({
        unique: true,
        index: true,
    })
    number: number;
}

//ignore keyvalue in error message
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);