const gradeAssign = (grade) => {
    if(grade >= 0 && grade <= 64) {
        return 'F';
    }
    if(grade >= 65 && grade <= 69) {
        return 'D';
    }
    if(grade >= 70 && grade <= 79) {
        return 'C';
    }
    if(grade >= 80 && grade <= 89) {
        return 'B';
    }
    if(grade >= 90 && grade <= 100) {
        return 'F';
    }
    return -1;
}
