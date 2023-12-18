import React, { useState } from 'react'
import './CourseInput.css'
import Button from '../../../UI/Button';

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = (event) => {
        if(event.target.value.trim().length > 0){
            setIsValid(true) 
        }
        setEnteredValue(event.target.value);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredValue.trim().length === 0){
            setIsValid(false)
            return;
        }
        props.onAddGoal(enteredValue)
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control`}> 
                <label>Course Goal</label>
                <input type='text' onChange={goalInputChangeHandler}/>
                {/* <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
                <input style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}}type='text' onChange={goalInputChangeHandler}/> */}
            </div>
            <div className={`form-control-Button ${!isValid ? 'invalid' : ''}`}>
                <Button type='submit'>Add Goal</Button>
            </div>
        </form>
    )
}
export default CourseInput;