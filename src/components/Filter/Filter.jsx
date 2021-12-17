import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import s from './Filter.module.css'

const Filter = ({ name, lastname, age, onChange, handleClick,checked }) => {

  
    return (
        <>
            <form className={s.filterForm} >
            <label className={s.label}
                htmlFor={shortid.generate()}>
                Имя
                <input
                    className={s.input}
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
                    className={s.input}
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
                    className={s.input}
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
                            onClick={handleClick}
                            checked={checked}
                    />
                </label>
                <label>
                    female
                    <input
                    value="female"
                    type="checkbox"
                            onClick={handleClick}
                            checked={checked}
                    />
                </label>
            </div>
                
                </form>
        </>
  )  
}

export default Filter