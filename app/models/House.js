


export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl ? data.imgUrl : 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator

  }

  get CardTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
      <section class="row">
        <div class="col-12 col-md-4 p-0">
          <img class="img-fluid house-img"
            src="${this.imgUrl}"
            alt="${this.bedrooms} ${this.bathrooms}">
            </div>
            <div class="col-12 p-3">
            <h2>${this.year}</h2>
            <h4>Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</h4>
            <h3>$${this.price}</h3>
            <p>${this.description}</p>
            <h4>${this.createdAt.toLocaleString()}</h4>
            <div class="d-flex align-items-center mb-3">
              <h5 class="me-3">${this.creator.name}</h5>
              <img class="img-fluid creator-picture"
                src="${this.creator.picture}"
                alt="${this.creator.name}">
            </div>
        </div>
      </section>
    </div>
    `
  }
}


// let houseData = {
//   "_id": "645d60f381faf24223ae886b",
//   "bedrooms": 3,
//   "bathrooms": 2,
//   "levels": 2,
//   "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//   "year": 2003,
//   "price": 230000,
//   "description": "Super sick house",
//   "creatorId": "63f7d6202d1cf882287f12e2",
//   "createdAt": "2023-05-11T21:41:07.979Z",
//   "updatedAt": "2023-05-11T21:41:07.979Z",
//   "__v": 0,
//   "creator": {
//     "_id": "63f7d6202d1cf882287f12e2",
//     "name": "Charles Francis Xavier",
//     "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
//     "id": "63f7d6202d1cf882287f12e2"
//   },
//   "id": "645d60f381faf24223ae886b"
// }


