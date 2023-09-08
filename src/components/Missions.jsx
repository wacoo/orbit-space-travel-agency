import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsSlice';
import './Mission.css';

function Missions() {
  const missionData = useSelector((store) => store.missions) ?? {
    isLoading: false,
    missions: [],
    error: null,
    joinedMissions: [],
  };
  const {
    isLoading, missions, error, joinedMissions,
  } = missionData;
  const dispatch = useDispatch();

  function handleJoinMission(id) {
    dispatch(joinMission(id));
  }

  function handleLeaveMission(id) {
    dispatch(leaveMission(id));
  }

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <table className="mission-table">
        <thead>
          <tr>
            <th className="mission-cell">Mission</th>
            <th className="description-cell">Description</th>
            <th className="status-cell">Status</th>
            <th className="button-cell">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr
              key={mission.id}
              className={
                joinedMissions.includes(mission.id) ? 'rows' : 'join-rows'
              }
            >
              <td className="mission-cell">{mission.name}</td>
              <td className="description-cell">
                {mission.description}
              </td>
              <td className="status-cell">
                {joinedMissions.includes(mission.id) ? (
                  <span className="leave-status">Active Member</span>
                ) : (
                  <span className="join-status">NOT A MEMBER</span>
                )}
              </td>
              <td className="button-cell">
                {joinedMissions.includes(mission.id) ? (
                  <button
                    type="button"
                    className="leave-button"
                    onClick={() => handleLeaveMission(mission.id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="join-button"
                    onClick={() => handleJoinMission(mission.id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Missions;
