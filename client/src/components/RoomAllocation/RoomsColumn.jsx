import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import RoomCard from './RoomCard';
import './RoomAllocation.css';
import axios from 'axios';

const RoomsColumn = ({ rooms }) => {
  return (
    <div className="room-allocation-column-outer">
      <div className="room-allocation-column-inner">
        <h2 className="room-allocation-column-heading">Rooms</h2>

        {rooms.map((room, index) => (
          <RoomCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RoomsColumn;
