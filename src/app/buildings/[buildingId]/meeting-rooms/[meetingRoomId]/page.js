const MeetingRoomDetailPage = ({params}) => {
    return (
        <main>
            Meeting Room {params.meetingRoomId}
            <div>
                <a href={`${params.meetingRoomId}/book`}>Book</a>
            </div>
        </main>
    )
}

export default MeetingRoomDetailPage