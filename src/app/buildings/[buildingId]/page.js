'use client'

import CoworkingList from "@/modules/coworking/components/coworking-list";
import MeetingRoomList from "@/modules/meeting-room/components/meeting-room-list";
import MeetingRoomAPI from "@/modules/meeting-room/api/meeting-room.api";

import PrivateOfficeList from "@/modules/private-office/components/private-office-list";
import { useEffect, useState } from "react";

export default function BuildingDetailPage({params}) {
    const [meetingRooms, setMeetingRooms] = useState([])

    useEffect(() => {
        const meetingRoomAPI = new MeetingRoomAPI()
        setMeetingRooms(meetingRoomAPI.list(params.buildingId))
    }, [])

    return (
        <main>
            <h1>Building Whatever with ID {params.buildingId}</h1>
            <div>
                <h2>Meeting Rooms</h2>
                <MeetingRoomList meetingRooms={meetingRooms}></MeetingRoomList>
            </div>
            <hr></hr>
            <div>
                <h2>Coworkings</h2>
                <CoworkingList></CoworkingList>
            </div>
            <hr></hr>
            <div>
                <h2>Private Offices</h2>
                <PrivateOfficeList></PrivateOfficeList>
            </div>
        </main>
    )
}