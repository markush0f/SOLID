import { NotificationSender } from "./Notification.class.sender";


export class EmailNotification implements NotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}
export class TextMessageNotification implements NotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending text message notification: ${message}`);
    }
}
export class PushNotification implements NotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}