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
        this.ns = this.setNutriscore(_cerealBrandFromJson.rating);
    }    
    
    setNutriscore(rate) {
        if (rate < 35) {
            return 'E';
        }
        else if (rate >= 35 && rate < 55) {
            return 'D';
        }
        else if (rate >= 55 && rate < 70) {
            return 'C';
        }
        else if (rate >= 70 && rate < 80) {
            return 'B';
        }
        else {
            return 'A';
        }
}
}


export { CerealBrand };