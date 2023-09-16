import PropTypes from 'prop-types';

const Cart = ({ selectCourse, totalCreditHours, remaining }) => {
    // console.log(selectCourse);
    return (
        <div>
            <div className="mt-12">
                <h4 className="text-xl text-[#2F80ED] font-bold border-b-2 p-4">Credit Hrs Remaining: {remaining} hr</h4>
            </div>
            
            <h3 className="text-2xl font-bold text-center mt-6">Course Name</h3>

            {
                selectCourse.map((course) => (
                    <li key={course.id}>{course.title}</li>
                ))
            }

            <div className="mt-7">
                <h4 className="text-2xl border-t-2 p-4">Total Credit Hour : {totalCreditHours}</h4>
            </div>
        </div>
    );
};

Cart.propTypes = {
    handleSelectCourse: PropTypes.object
}

export default Cart;