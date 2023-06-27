import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";



class HousesService {

  async getHouses() {
    // debugger
    const res = await api.get('api/houses')
    console.log('got houses', res.data);

    const newHomes = res.data.map(housePojo => new House(housePojo))

    AppState.houses = newHomes
  }


}

export const housesService = new HousesService()


