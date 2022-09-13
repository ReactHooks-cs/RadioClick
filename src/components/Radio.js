import React from 'react'

function Radio({onChange, list}) {
    return (
        <div className="layout-row align-items-center justify-content-center mt-75">
            <label className="pr-10">Sort By</label>
            <input type="radio" data-testid="name"  value="name" checked={list === 'name'} onChange={onChange} />
            <label className="px-4">Name</label>
            {/* <input type="radio" data-testid="age" value="birth" checked={list === 'birth'} onChange={onChange} /> */}
            <input type="radio" data-testid="age" onChange={onChange} />
            <label className="px-4">Age</label>
        </div>
    )
}

export default Radio