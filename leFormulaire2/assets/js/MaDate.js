
class MaDate {
    static ageRetraite = 67;
    static ageMajorite = 18;
    /**
 * constructeur
 * @param {Date} _date <= date de naissance
 */
    constructor(_date) {
        this.datePresent = new Date();
        this.dateNaiss = _date;
    }
    /**
     * fonction de validation de la date
     * @returns { boolean } <= la date est VRAI si elle est dans le passé et FAUX si elle est dans le futur
     */
    estValide() {
        return this.datePresent > this.dateNaiss;
    }
    /**
     * fonction de calcul de l'intervalle entre la date saisie et la date de naissance
     * @returns { number } <= renvoie l'intervalle entre la date saisie et celle de naissance
     */
    intervalleDates() {
        let diffDates = this.datePresent - this.dateNaiss;
        return parseInt(diffDates/(1000*3600*24*365));
    }
};

export { MaDate }