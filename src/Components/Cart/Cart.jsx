
const Cart = ({selectCourse}) => {
    console.log(selectCourse);
    return (
        <div>
            <h3 className="text-2xl font-bold text-center">Course Name: {selectCourse.length}</h3>
        </div>
    );
};

export default Cart;