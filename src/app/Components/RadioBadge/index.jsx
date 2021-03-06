import React from 'react';
import cx from 'classnames';
import './style.css'
const RadioBadge = ({selected, onChange, filters}) => {
    return (
        <div className="d-flex justify-content-center mx-auto btn-group-sm">
            {filters.map(i =>
                <label className={cx("btn-radio", selected === i && "btn-radio-select")}>{i}
                    <input className="d-none" type="radio" onChange={() => onChange(i)} checked={selected === i}/>
                </label>
            )}
        </div>
    );
};

export default RadioBadge;