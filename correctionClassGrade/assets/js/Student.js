class Student
{
    constructor(_studentFromJson) {
        this.firstName = '';
        this.lastName = '';
        this.setGrade(_studentFromJson.grade);
        this.setFullName(_studentFromJson.fullname);
    }

    setGrade(_grade) {
        // on controle si la note est valide
        if(_grade < 0 || _grade > 20) {
            throw new Error('La note doit être comprise entre 0 et 20');
        }
        this.grade = _grade;
    }

    setFullName(_fullName) {
        let myFullName = _fullName.split(' ');
        
        if(myFullName.lenght < 2) {
            throw new Error('Nom ou prénom invalide(s)');
        }

        if(myFullName[0].length < 2) {
            throw new Error('Le nom est invalide');
        }
        if(myFullName[1].length < 2) {
            throw new Error('Le prénom est invalide');
        }
        
        this.lastName = myFullName[0];
        this.firstName = myFullName[1];
    }
}

export { Student };
