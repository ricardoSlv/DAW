import Paragraph from "../models/paragraph.js";

export function list(){
    return Paragraph
        .find()
        .exec()
}

export function lookup(id){
    return Student
        .findOne({_id: id})
        .exec()
}

export function insert(student){
    const newPara = new Paragraph(student)
    return newPara.save()
}

export function remove(id){
    console.log(id)
    return Paragraph
        .deleteOne({_id:id})
        //.exec()
}

export function edit(id, newText){
    return Paragraph
        .findByIdAndUpdate(id, newText, {new: true})
        //.exec()
}