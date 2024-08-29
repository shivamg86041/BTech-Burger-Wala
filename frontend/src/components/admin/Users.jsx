import React from 'react'
import me from "../../assets/founder.jpg"

const Users = () => {
  return (
<section className='tableClass'>

<main>
    <table>
        <thead>
        <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Role</th>
            <th>Since</th>
        </tr>
        </thead>

        <tbody>
            <tr>
                <td>1</td>
                <td>Shivam Gupta</td>
                <td>
                    <img src={me} alt="usr1" />
                </td>
                <td>Admin</td>
                <td>{"23-04-2023"}</td>
            </tr>
        </tbody>
    </table>
</main>

</section>
  )
}

export default Users