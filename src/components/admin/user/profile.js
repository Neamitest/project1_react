import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../rtk/users-slice";
const id = "65af908307635c68cb0cc159";

export default function Profile() {
    const user = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers(id));
    }, []);
    const date = new Date(user?.data?.dateCreation).toLocaleString();
    return (
        <>
            <div>profile</div>
            <h3>email:{user?.data?.email}</h3>
            <h3>role:{user?.data?.role}</h3>
            <h3>data creation: {date}</h3>
        </>
    );
}
