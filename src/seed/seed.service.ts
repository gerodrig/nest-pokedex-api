import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

//905
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=5');


    data.results.forEach(({name, url}) => {
      const segments = url.split('/');
      const number:number  = +segments.at(-2);

      console.log({name, number});

    });


    return data.results;
  }

}
