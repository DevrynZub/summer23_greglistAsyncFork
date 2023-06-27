import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";





function _drawHouses() {
  const houses = AppState.houses
  let template = ''
  // debugger
  houses.forEach(h => { template += h.CardTemplate })
  // console.log('homes', template);
  setHTML('availableHomes', template)

}

export class HousesController {
  constructor() {
    console.log('this is my house controller');

    this.getHouses()

    AppState.on('houses', _drawHouses)



  }




  // REVIEW CRUD
  // Create
  // Update
  // Delete

  // Read
  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.log(error);
      Pop.error(error.message)
    }
  }











}


