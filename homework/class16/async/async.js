const student = [
    {
        id : 1,
        name :"Ali",
    },
    {
        id : 2,
        name :"Zahra",
    },
    {
        id : 3,
        name :"Fatima",
    }
]

const course = [
    {
        id : 101,
        courseName : "English"
    },
    {
        id : 102,
        courseName : "Computer"
    }
]

const attendance = [
    {
        stdId : 1,
        courseId : 101,
        stdAttendance : 48
    },
    {
        stdId : 2,
        courseId : 101,
        stdAttendance : 45
    },
    {
        stdId : 1,
        courseId : 102,
        stdAttendance : 47
    },
    {
        stdId : 2,
        courseId : 102,
        stdAttendance : 50
    },
    {
        stdId : 3,
        courseId : 102,
        stdAttendance : 47
    },
    {
        stdId : 3,
        courseId : 101,
        stdAttendance : 49
    },
]

function stdData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
              resolve(student)
        }, 1000);
    })
}

function courseData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
              resolve(course)
        }, 1000);
    })
}

async function DisplayStd() {
    const stddata = await stdData(); 
    const cData = await courseData(); 
    display = []

    const result = stddata.map(student => {
       display += `\nStudent ID: ${student.id}, Name: ${student.name}`;
        const attendanceRecords = attendance.filter(a => a.stdId === student.id) 
            .map(a => {
                const courseInfo = cData.find(c => c.id == a.courseId);
                display +=`
                 Course ID: ${a.courseId}, Course Name: ${courseInfo.courseName}, Attendance: ${a.stdAttendance}`;
            });
    });
    // console.log(display)

    return display;
}

DisplayStd().then(data => {
    console.log(data);
});