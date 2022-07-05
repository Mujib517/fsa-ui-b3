// input
// readonly
const Person = ({ name, age }) => {
    console.log(typeof age);
    return <h4>Hello, {name}, you are {age} years old</h4>
}

export default Person;
