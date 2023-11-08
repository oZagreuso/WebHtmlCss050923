class Student
{
    constructor(_studentFromJson) {
        this.firstName = '';
        this.lastName = '';
        this.grade = _studentFromJson.grade;
        this.setFullName(_studentFromJson.fullname);
    }

    setFullName(_fullName) {
        let myFullName = _fullName.split(' ');
        this.lastName = myFullName[0];
        this.firstName = myFullName[1];
    }
}

export { Student };