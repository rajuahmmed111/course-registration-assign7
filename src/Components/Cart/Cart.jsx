import PropTypes from 'prop-types';

const Cart = ({ selectCourse, totalCreditHours, remaining }) => {
    // console.log(selectCourse);
    return (
        <div>
            <div className="mt-12">
                <h4 className="text-xl text-[#2F80ED] font-bold">Credit Hrs Remaining: {remaining} hr</h4>
            </div>
            <h3 className="text-2xl font-bold text-center mt-6">Course Name: {selectCourse.length}</h3>

            {
                selectCourse.map((course) => (
                    <li key={course.id}>{course.title}</li>
                ))
            }

            <div className="mt-7">
                <h4 className="text-2xl ">Total Credit Hour : {totalCreditHours}</h4>
            </div>
        </div>
    );
};

Cart.propTypes = {
    handleSelectCourse: PropTypes.object
}

export default Cart;