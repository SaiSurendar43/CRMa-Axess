import React from 'react'
import Calender from "./calender";
import { useState } from 'react';

const Todo = () => {

const [todoList,setTodoList] = useState([]);


  return (
    <div>
            {/* <Calender/> */}
            <div className='row'>
                <div className='col-lg-4'>
                    <div>
                        {}
                    </div>
                </div>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'></div>
            </div>
    </div>
  )
}

export default Todo