import React, { useEffect, useState } from "react";
import ChangePersonalInfo from "../MODALS/ChangePersonalInfo/ChangePersonalInfo";
import { getAllUser } from "../../api/UserRequests";
import SingleFollowerCard from "../SingleFollowerCard/SingleFollowerCard";
import { useSelector } from "react-redux";

const FollowersCard = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return ( 
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) return <SingleFollowerCard person={person} key={id} />;
      })}

      <ChangePersonalInfo
        modalOpened={modalOpen}
        data={persons}
        setModalOpened={setModalOpen}
      />
    </div>
  );
};

export default FollowersCard;
