import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {

  

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter
  ) {}

//905
  async executeSeed() {

    //before executing seed we need to delete all data from database
    await this.pokemonModel.deleteMany({});

    const { results } = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=905');

    // const insertPromisesArray: Promise<Pokemon>[] = []; //array of promises method
    const pokemonToInsert: { name: string, number: number }[] = []; //array of objects
    

    results.forEach(async({name, url}) => {
      const segments = url.split('/');
      const number:number  = +segments.at(-2);

      //const pokemon = await this.pokemonModel.create({name, number});
      // insertPromisesArray.push(this.pokemonModel.create({name, number})); //array of promises method
      pokemonToInsert.push({name, number}); //array of objects
      
      //console.log({name, number});

    });
    await this.pokemonModel.insertMany(pokemonToInsert); //array of objects This is prefered method as database will be connected once.
    // await Promise.all(insertPromisesArray); //array of promises method

    return 'Seed Executed';
  }

}
