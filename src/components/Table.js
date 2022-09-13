import React from 'react'

function Table({people}) {
    return (
        <div className="table-div">
        <div className="card w-50 mx-auto mt-20 pb-30">
            <table data-testid="table">
            <thead>
                <tr>
                    <th className="course-name">Person Name</th>
                    <th className="duration">Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {people.map(people => (
                    <tr>
                        <td>{people.name}</td>
                        <td>{people.birth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    )
}

export default Table