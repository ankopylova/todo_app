import React from 'react';
import cx from 'classnames';

const RadioBadge = ({selected, onChange, filters}) => {
    return (
        <div className="d-flex justify-content-center mx-auto">
            {filters.map(i =>
                <label className={cx("btn-sm mx-auto", selected === i && "btn-outline-secondary active mx-auto")}>{i}
                    <input className="d-none" type="radio" onChange={() => onChange(i)} checked={selected === i}/>
                </label>
            )}
        </div>
    );
};

export default RadioBadge;