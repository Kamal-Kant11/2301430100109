import axios from 'axios';

// const API_URL = import.meta.env.NOTIFICATION_API_URL;
const NOTIFICATION_API_URL='http://4.224.186.213/evaluation-service/notifications'
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW1hbGthbnRzaW5naGFsMzMzQGdtYWlsLmNvbSIsImV4cCI6MTc4MDkwNTQ0MCwiaWF0IjoxNzgwOTA0NTQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDEzMjk5YmQtYjRlZS00N2NkLThmYjMtYTFiOGZjNzNiNThkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2FtYWwga2FudCBzaW5naGFsIiwic3ViIjoiZWIyNWQ4YWQtM2ZmYy00NzQ2LWJlMDgtMTYyMWQyYmE0M2I3In0sImVtYWlsIjoia2FtYWxrYW50c2luZ2hhbDMzM0BnbWFpbC5jb20iLCJuYW1lIjoia2FtYWwga2FudCBzaW5naGFsIiwicm9sbE5vIjoiMjMwMTQzMDEwMDEwOSIsImFjY2Vzc0NvZGUiOiJueVhRTXUiLCJjbGllbnRJRCI6ImViMjVkOGFkLTNmZmMtNDc0Ni1iZTA4LTE2MjFkMmJhNDNiNyIsImNsaWVudFNlY3JldCI6InNBQUVyVkt6bnJYTUFFU3kifQ.CQHisSEfBDiIUDTZls-qVLOSOPck0zvf7j1ZobvQep4"

const topNotifications = [];

const getTopNotifications = async() => {
    try {
        const response = await axios.get(NOTIFICATION_API_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });

        const notifications = response.data.notifications;
        
        const placements = notifications.filter(
            notification => notification.Type === 'Placement'
        );

        const results = notifications.filter(
            notification => notification.Type === 'Result'
        );

        const events = notifications.filter(
            notification => notification.Type === 'Event'
        );

        const topNotifications = [
            ...placements,
            ...results,
            ...events
        ].slice(0, 10);
        
        return topNotifications;
    }
    catch {
        console.error('Failed to fetch notifications from the server');
    }
}

export default getTopNotifications;