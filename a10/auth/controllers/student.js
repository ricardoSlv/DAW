import Student from "../models/student.js";

export function list(){
    return Student
        .find()
        .sort({nome: 1})
        .exec()
}

export function lookup(id){
    return Student
        .findOne({numero: id})
        .exec()
}

export function insert(student){
    const newStudent = new Student(student)
    return newStudent.save()
}