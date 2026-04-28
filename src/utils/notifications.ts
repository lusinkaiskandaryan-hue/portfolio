import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, description: string) => {
    api[type]({
      message: 'Notification',
      description,
    });
  };

  return { contextHolder, openNotificationWithIcon };
};