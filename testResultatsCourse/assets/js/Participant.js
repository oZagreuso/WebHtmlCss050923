class Participant
{
    constructor(_participantFromJson) {
        this.time = _participantFromJson.temps;
        this.lastName = '';
        this.firstName = '';
        this.finalTime = this.setConvertedTime(_participantFromJson.temps);
        // _participantFromJson.temps;
        this.setNom(_participantFromJson.nom);
        // this.setConvertedTime(_participantFromJson.temps);
    
    }

    setNom(_nom) {
        let myName = _nom.split(" ");
        this.lastName = myName[0];
        this.firstName = myName[1];
    }

    setConvertedTime(_temps) {
       let myConvertedTime = _temps;
       let minutes = 0;
       let secondes = 0;

       secondes = myConvertedTime % 60;
       minutes = (myConvertedTime - secondes) / 60;
     

       if (minutes < 10) {
        myConvertedTime = '0' + minutes + 'minutes';
       }
       else {
        myConvertedTime = minutes + 'minutes';
       }

       if (secondes < 10) {
        myConvertedTime = myConvertedTime + '0' + secondes + 'secondes';
       }
       else {
       myConvertedTime = myConvertedTime + secondes + 'secondes';
       }

       return myConvertedTime;
    
    }

}

export { Participant };