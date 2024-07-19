import {useState} from "react";
import InputSearch from "../../Common/InputSearch/InputSearch";

const data = [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'Jane Doe 2', email: 'jane@example.com'},
    {id: 3, name: 'Teo', email: 'teo@example.com'},
    {id: 4, name: 'Nam', email: 'nam@example.com'}
]

function UserList() {

    const [users, setUsers] = useState(data)
    const [userFilter, setUserFilter] = useState(users)

    const handleDeleteUser = (id) => {
       // thuat toan xoa 1 phan tu trong mang theo dieu kien
        if (window.confirm("Are you sure you want to delete")) {
            const newUsers = users.filter(user => user.id !== id)
            setUserFilter(newUsers)
        }
    }

    const handleSearch = (keyword) => {
        const newUsers = keyword ? users.filter(user => user.name.toLowerCase().includes(keyword)) : data
        setUserFilter(newUsers)
    }

    return (
        <>
            <div className="card mt-2">
                <div className="card-header">
                    <div className="row">
                        <div className="col-12 col-md-6"> User List</div>
                        <div className="col-12 col-md-6">
                            <InputSearch search={handleSearch}/>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        { userFilter.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList;