import React from 'react';

import shortid from 'shortid';
import s from './Filter.module.css'

const Filter = ({ value, onChange, checked, handleChange }) => {
    return (
        <>
            <form>
            <label className={s.label}
                htmlFor={shortid.generate()}>
                Найти
                <input
                    className={s.input}
                    name="filter"
                    type="text"
                    value={value}
                    onChange={onChange}
                    />
                    <label >
                      male  
                        <input
                            value="male "
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                    </label>
                    <label >
                        female
                        <input
                            value="female"
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                 </label>
                </label>
                </form>
        </>
  )  
}

export default Filter