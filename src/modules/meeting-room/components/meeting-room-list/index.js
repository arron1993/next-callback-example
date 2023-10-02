const MeetingRoomList = ({meetingRooms}) => {
    return (
        <table>

            <tbody>
                {meetingRooms.map((meetingRoom) => {
                        return (
                            <tr key={meetingRoom.id}>
                                <td>
                                    {meetingRoom.name}
                                </td>
                                <td>
                                    <a href={`${meetingRoom.buildingId}/meeting-rooms/${meetingRoom.id}/`}>View</a>
                                </td>
                            </tr>
                        )
                    })}
        </tbody>

    </table>
    )
}

export default MeetingRoomList