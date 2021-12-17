import React from 'react';
import shortid from 'shortid';
import s from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({ name, lastname, age, onChange, onClick,checked }) => {

  
    return (
    <>
        <form className={s.filterForm} >
            <label className={s.label}
                htmlFor={shortid.generate()}>
                Имя
                <input
                    className={s.inputName}
                    name="name"
                    type="text"
                    value={name}
                    onChange={onChange}
                    />
                    
            </label>
            <label className={s.label}
                htmlFor={shortid.generate()}>
                Фамилия
                <input
                    className={s.inputLastName}
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={onChange}
                    />
                    
            </label>
             <label className={s.label}
                htmlFor={shortid.generate()}>
                Возраст
                <input
                    className={s.inputAge}
                    name="age"
                    type="text"
                    value={age}
                    onChange={onChange}
                    />
            </label>
            <div className={s.checkbox}>
            <label>
                    male
                    <input
                    value="male"
                    type="checkbox"
                    onChange={onClick}
                    checked={checked}
                    />
            </label>
            <label>
                    female
                    <input
                    value="female"
                    type="checkbox"
                    onChange={onClick}
                    checked={checked}
                    />
             </label>
            </div>
                
        </form>
      </>
  )  
}

export default Filter

Filter.prototype = {
    name:PropTypes.string,
    lastname:PropTypes.string,
     age:PropTypes.number,
     onChange:PropTypes.func,
     onClick:PropTypes.func,
     checked:PropTypes.bool,
}