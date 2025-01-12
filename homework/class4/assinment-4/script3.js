let students = [
    {
        stdname : "Ali",
        subjects : {urdu : 80 , maths : 95 , english : 60}
    },
    {
        stdname : "Hassan",
        subjects : {urdu : 90 , maths : 65 , english : 53}
    },
];
let count = 1
students.forEach(std => {
    console.log(`${count}: Student Name : ${std.stdname}`);
    console.log(`Urdu Marks : ${std.subjects.urdu}`);
    console.log(`Maths Marks : ${std.subjects.maths}`);
    console.log(`English Marks : ${std.subjects.english}`);
    count = count+ 1;
});