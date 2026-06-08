import axios from 'axios';

const API_URL = 'http://4.224.186.213/evaluation-service/logs';

const log = async(stack, level, package, message) => {
    try {
        await axios.post(API_URL, {
            stack,
            level,
            package,
            message
        })
    }
    catch {
        console.error('Failed to send log to the server');
    }
}