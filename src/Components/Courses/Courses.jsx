import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);

    useEffect(() => {
        fetch("./Course.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, [])


    const handleSelectCourse = (course) => {
        setSelectCourse([...selectCourse, course]);
    }


    return (
        <div className="container">
            <div className="flex justify-between gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-xl">
                    {courses.map((course) => (
                        <div key={course.id} className="shadow-2xl w-80 mt-8 rounded-lg p-4">
                            <div>
                                <img className="w-full" src={course.img} alt="" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mt-4">{course.title}</h2>
                            </div>
                            <p className="text-xl mt-4">{course.paragraph}</p>

                            <div className="flex justify-between mt-4 mx-8">
                                <p className="text-xl font-semibold">Price: {course.price}</p>
                                <p className="text-xl font-semibold">Credit: {course.credit}</p>
                            </div>
                            <button
                                onClick={() => handleSelectCourse(course)}
                                className="btn btn-primary mt-8 w-full text-xl font-semibold"
                            >Select</button>
                        </div>
                    ))}
                </div>
                <div className="">
                    <Cart selectCourse={selectCourse}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;