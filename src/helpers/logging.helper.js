import axios from 'axios';

const API_URL = 'http://4.224.186.213/evaluation-service/logs'
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW1hbGthbnRzaW5naGFsMzMzQGdtYWlsLmNvbSIsImV4cCI6MTc4MDkwNTQ0MCwiaWF0IjoxNzgwOTA0NTQwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDEzMjk5YmQtYjRlZS00N2NkLThmYjMtYTFiOGZjNzNiNThkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2FtYWwga2FudCBzaW5naGFsIiwic3ViIjoiZWIyNWQ4YWQtM2ZmYy00NzQ2LWJlMDgtMTYyMWQyYmE0M2I3In0sImVtYWlsIjoia2FtYWxrYW50c2luZ2hhbDMzM0BnbWFpbC5jb20iLCJuYW1lIjoia2FtYWwga2FudCBzaW5naGFsIiwicm9sbE5vIjoiMjMwMTQzMDEwMDEwOSIsImFjY2Vzc0NvZGUiOiJueVhRTXUiLCJjbGllbnRJRCI6ImViMjVkOGFkLTNmZmMtNDc0Ni1iZTA4LTE2MjFkMmJhNDNiNyIsImNsaWVudFNlY3JldCI6InNBQUVyVkt6bnJYTUFFU3kifQ.CQHisSEfBDiIUDTZls-qVLOSOPck0zvf7j1ZobvQep4"


const createLog = async (stack, level, packageName, message) => {
    try {
        const response = await axios.post(API_URL, {
            stack,
            level,
            package: packageName,
            message
        }, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })

        console.log('Log sent to the server successfully');
    }
    catch (error) {
        console.error('Failed to send log to the server');
        console.error(error.response?.data || error.message);
    }
}

export default createLog;