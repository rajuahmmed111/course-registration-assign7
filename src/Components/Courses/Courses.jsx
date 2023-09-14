import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch("./Course.json")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [])
    return (
        <div>

        </div>
    );
};

export default Home;