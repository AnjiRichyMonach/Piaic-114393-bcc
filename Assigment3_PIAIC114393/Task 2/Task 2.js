
let stu = ['Michael', 'John', 'Tony']
let marks = [300, 400, 500]

const Paragraph = document.getElementById('paragraph')
Paragraph.innerText = `Marks of ` + stu[0] + ` is ` + marks[0] + ` Percentage : ` + marks[0] / 500 * 100 + " %" + "\n\n" +
    `Marks of ` + stu[1] + ` is ` + marks[1] + ` Percentage : ` + marks[1] / 500 * 100 + " %" + "\n\n" +

    `Marks of ` + stu[2] + ` is ` + marks[2] + ` Percentage :` + marks[2] / 500 * 100 + " %";