const propId = Symbol('id');
const propUrl = Symbol('url');
const propName = Symbol('name');
const propImageUrl = Symbol('imageUrl');
const propCategory = Symbol('category');

module.exports = class Station {
  constructor(id, name, url, imageUrl, category) {
    this.Id = id;
    this.Name = name;
    this.ImageUrl = imageUrl;
    this.Url = url;
    this.Category = category;
  }

  get Id() { return this[propId]; }

  set Id(newId) { this[propId] = newId; }

  get Name() { return this[propName]; }

  set Name(newName) { this[propName] = newName; }

  get Url() { return this[propUrl]; }

  set Url(newUrl) { this[propUrl] = newUrl; }

  get ImageUrl() { return this[propImageUrl]; }

  set ImageUrl(newImageUrl) { this[propImageUrl] = newImageUrl; }

  get Category() { return this[propCategory]; }

  set Category(newcategory) { this[propCategory] = newcategory; }
};
