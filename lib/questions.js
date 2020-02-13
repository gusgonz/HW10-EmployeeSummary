const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team Manager:',
        validate(input) {
            if (input === '') {
                return 'Please enter a valid name';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter Manager's id #",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid id';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter Manager's email",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid email';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter Manager's office number",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid office number';
            }
            return true;
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team engineer:',
        validate(input) {
            if (input === '') {
                return 'Please enter a valid name';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter Engineer's id #",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid id';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter Engineer's email",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid email';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter Engineer's Github username",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid username';
            }
            return true;
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team Intern:',
        validate(input) {
            if (input === '') {
                return 'Please enter a valid name';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter Intern's id #",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid id';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter Intern's email",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid email';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter Intern's school",
        validate(input) {
            if (input === '') {
                return 'Please enter a valid school';
            }
            return true;
        }
    }
];

exports.managerQuestions = managerQuestions;
exports.engineerQuestions = engineerQuestions;
exports.internQuestions = internQuestions;