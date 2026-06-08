const NotificationCard = ({ notification }) => {
    return (
        <div className="notification-card">
            <span className="notification-type">
                {notification.Type}
            </span>
            
            <p>{notification.Message}</p>
            
            <small>{notification.Timestamp}</small>
        </div>
    );
};

export default NotificationCard;