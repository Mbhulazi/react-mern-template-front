import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeUserRole, getUsers } from "../../redux/features/auth/authSlice";

const ChangeRole = ({ _id }) => {
  const [userRole, setUserRole] = useState("");
  const dispatch = useDispatch();
  const changeRole = async (e) => {
    if (!userRole) {
      toast.error("Please select a role");
    }
    const userData = {
      role: userRole,
      id: id,
    };
    await dispatch(changeUserRole(userData));
    await dispatch(getUsers());
  };
  return (
    <div className="sort">
      <form className="--flex-start" onSubmit={(e) => changeRole(e)}>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value=""> --- select ---</option>
          <option value="subscriber"> Subscriber</option>
          <option value="author"> Author</option>
          <option value="suspended"> Suspended</option>
        </select>
        <button className="--btn --btn-primery">
          <FaCheck size={15} />
        </button>
      </form>
    </div>
  );
};

export default ChangeRole;
