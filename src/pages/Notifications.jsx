import { useEffect, useState } from "react";
import getTopNotifications from "../helpers/notifications.helper";
import createLog from "../helpers/logging.helper";
import NotificationCard from "../components/NotificationCard";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try{
            await createLog(
                "frontend",
                "info",
                "component",
                "Started fetching notifications"
            );
            const data = await getTopNotifications();
            setNotifications(data);
            await createLog(
                "frontend",
                "info",
                "component",
                `Fetched ${data.length} notifications`
            );
        }
        catch {
            await createLog(
                "frontend",
                "error",
                "component",
                "Error In fetching the notifications"
            );
        }
    };

    return (
        <div>
            <h1>Top Notifications</h1>
            {
                notifications.map((notification) => (
                    <NotificationCard
                        key={notification.ID}
                        notification={notification}
                    />
                ))
            }
        </div>
    )
};

export default Notifications;

