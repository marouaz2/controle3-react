import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/UserSlice"
import { getDetail, getDetails } from "../redux/TodoSlice";

export default function ListUsers() {
  const dispatch = useDispatch();
  const listuti = useSelector((state) => state.user.data).map(
    (item) => item.id.common
  );
  const selecteduti = useSelector((state) => state.user.selectedUser);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getDetails());
  }, [dispatch]);
  return (
    <div>
      <select
        value={selecteduti}
        onChange={(e) => dispatch(getDetails(e.target.value))}
      >
        {listuti.map((item,index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}