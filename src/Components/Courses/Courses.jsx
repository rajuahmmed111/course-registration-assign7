import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [totalCreditHours, setTotalCreditHours] = useState(0);
    const [remaining, setRemaining] = useState(0);


    const fixedHours = 20;

    useEffect(() => {
        fetch("./Course.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, [])


    const handleSelectCourse = (course) => {
        const isExist = selectCourse.find(item => item.id == course.id)

        let credit = course.credit;

        if (isExist) {
            return alert("already booked");
        }
        else {
            selectCourse.forEach((item) => {
                credit = credit + item.credit;
            });
            const remaining = 20 - credit;
            if (credit > 20) {
                alert('Unavailable to credit read time')
            }
            else {
                setTotalCreditHours(credit);
                setRemaining(remaining);

                setSelectCourse([...selectCourse, course]);
            }
        }
    }


    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 w-[1450px] border-green-300">
                <div className="grid grid-cols-1 w-2/3 lg:grid-cols-3 gap-6 shadow-xl">
                    {courses.map((course) => (
                        <div key={course.id} className="shadow-2xl  mt-8 rounded-lg p-4">
                            <div>
                                <img className="w-full" src={course.img} alt="" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mt-4">{course.title}</h2>
                            </div>
                            <p className="text-xs mt-4">{course.paragraph}</p>

                            <div className="flex justify-between mt-4">
                                <p className="text-xl">Price: {course.price}</p>
                                <p className="text-xl">Credit: {course.credit}hr</p>
                            </div>
                            <button
                                onClick={() => handleSelectCourse(course)}
                                className="btn btn-primary mt-8 w-full text-xl font-semibold"
                            >Select</button>
                        </div>
                    ))}
                </div>
                <div className="w-1/3 shadow-xl h-96 rounded-xl">
                    <Cart
                        selectCourse={selectCourse}
                        totalCreditHours={totalCreditHours}
                        remaining={remaining}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelectCourse: PropTypes.func
}

export default Courses;