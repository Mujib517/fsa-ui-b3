import React from 'react';
import IfElse from './IfElse';
import ShouldRender from './ShouldRender';
import './Student.css';
// Fragment
// conditional rendering
function Student({ marks }) {
    return <>
        <h1>Student</h1>
        <IfElse cond={marks >= 40}>
            <h3 className="pass">Passed</h3>
            <h3 className="fail">Failed</h3>
        </IfElse>
        {/* {marks >= 40 ? <h3>Passed</h3> : <h3>Failed</h3>} */}
        {/* <h3 className={marks >= 40 ? 'pass' : 'fail'}> {marks >= 40 ? 'Passed' : 'Failed'}</h3> */}
    </>
}

export default Student;
