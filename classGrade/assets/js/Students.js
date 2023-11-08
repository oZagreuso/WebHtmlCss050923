class Students {
    constructor(_student) {
        Object.assign(this, _student);
        this.firstName = this.getFirstName(_student.fullname);
        this.lastName = this.getLastName(_student.fullname);
        this.grade = this.sortGrades(_student.fullname);
    }

    getFirstName(_fullname) {
        let fullnameArray = _fullname.split(' ');
        let firstName = fullnameArray[1];
        return firstName;
    }

    getLastName(_fullname) {
        let fullnameArray = _fullname.split(' ');
        let lastName = fullnameArray[0];
        return lastName;
    }

    sortGrades(_grade) {
        let grade = _grade.sort((a , b) => a - b);
        return grade;
    }
   

}
export { Students }
   