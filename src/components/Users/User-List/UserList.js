import {useEffect, useState} from "react";
import InputSearch from "../../Common/InputSearch/InputSearch";
import axios from "axios";
import Loading from "../../Common/Loading/Loading";
import {toast} from "react-toastify";

function UserList() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [loadData, setLoadData] = useState(false)

    useEffect(() => {
        axios.get("https://6679193318a459f6394dfa67.mockapi.io/users")
            .then(res => {
                setUsers(res.data)
                setIsLoading(false)
            })
    }, [loadData])


    const handleDeleteUser = (id) => {
       // thuat toan xoa 1 phan tu trong mang theo dieu kien
        if (window.confirm("Are you sure you want to delete")) {
            setIsLoading(true)
            axios.delete("https://6679193318a459f6394dfa67.mockapi.io/users/" + id).then(res => {
                setLoadData(!loadData)
                setIsLoading(false);
                toast.success("Delete success!", {
                    autoClose: 1000,
                })
            })
        }
    }

    const handleSearch = (keyword) => {

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
                        { isLoading ? (
                            <tr>
                                <td colSpan="3">
                                    <Loading/>
                                </td>
                            </tr>
                        ) : users.map((user, index) => (
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