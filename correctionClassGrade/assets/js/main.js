import { Student } from './Student.js';

const app =
{
    data() {
        return {
            students: [],
            minGrade: 12,
            studentName: '',
            studentGrade: 0
        }
    },
    async mounted() {
        let response = await fetch('./eval.json');
        this.students = await response.json();
        console.log(this.students);

        for (let i = 0; i < this.students.length; i++) {
            this.students[i] = new Student(this.students[i]);
        }

        this.students.sort((a, b) => a.grade - b.grade).reverse();

        console.log(this.students);
    },
    computed: {
        nbStudents() {
            return this.students.length;
        },
        avgGrade() {
            let sum = 0;
            for (let student of this.students) {
                sum += student.grade;
            }
            return (sum / this.nbStudents).toFixed(2);
        },
        nbStudentsAboveAvg() {
            let studentsAboveAvg = this.students.filter(student => student.grade > this.avgGrade);
            return studentsAboveAvg.length;
        }

    },
    methods: {
        addStudent() {
            console.log(this.studentName, this.studentGrade);
            let tmpStudent = { 'fullname': this.studentName, 'grade': this.studentGrade }

            try {
                let newStudent = new Student(tmpStudent);
                this.students.push(newStudent);
                this.students.sort((a, b) => a.grade - b.grade).reverse();
            } catch (error) {
                alert(error.message);
            }

        }

    }
}

Vue.createApp(app).mount('#app');