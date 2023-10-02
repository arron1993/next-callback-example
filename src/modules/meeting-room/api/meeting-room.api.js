export default class MeetingRoomAPI {
    list(buildingId) {
        return [
            {
                id: 1, name: "Meeting Room 1", "buildingId": buildingId,
                id: 2, name: "Meeting Room 2", "buildingId": buildingId,
                id: 3, name: "Meeting Room 3", "buildingId": buildingId,
                id: 4, name: "Meeting Room 4", "buildingId": buildingId,
            }
        ]
    }
    get(privateOfficeId) {
        // GET from wherever
    }

    create(privateOffice) {
        // post privateOffice
    }

    update(privateOffice) {
        // PUT privateOffice
    }

    delete(privateOfficeId) {
        // DELETE ID
    }
}