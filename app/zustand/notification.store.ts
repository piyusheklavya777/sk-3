import { create } from "zustand";

export type INotification = {
  id: string;
  message: string;
  heading?: string;
  type: "success" | "error" | "warning" | "info";
};

export const useNotificationStore = create<{
  notifications: INotification[];
  addNotification: (notifications: Omit<INotification, "id">[]) => void;
  removeNotification: (notification: string) => void;
}>((set) => ({
  notifications: [],
  addNotification: (newnotifications) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        ...newnotifications.map((n) => ({
          ...n,
          id: Math.random().toString(),
        })),
      ],
    })),
  removeNotification: (notificationId: string) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== notificationId),
    })),
}));