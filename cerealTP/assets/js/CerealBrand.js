class CerealBrand 
{
    constructor(_cerealBrandFromJson) {
        this.id = _cerealBrandFromJson.id;
        this.name = _cerealBrandFromJson.name;
        this.calories = _cerealBrandFromJson.calories;
        this.protein = _cerealBrandFromJson.protein;
        this.sodium = _cerealBrandFromJson.sodium;
        this.fiber = _cerealBrandFromJson.fiber;
        this.carbo = _cerealBrandFromJson.carbo;
        this.sugars = _cerealBrandFromJson.sugars;
        this.potass = _cerealBrandFromJson.potass;
        this.vitamins = _cerealBrandFromJson.vitamins;
        this.rating = _cerealBrandFromJson.rating;
    }
}

export { CerealBrand };