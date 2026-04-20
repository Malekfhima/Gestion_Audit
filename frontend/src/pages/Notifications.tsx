import React, { useState, useEffect, useCallback } from "react";
import { api } from "../lib/api";
import Navigation from "../components/Navigation";
import { Check, Trash2 } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "INFO" | "WARNING" | "ERROR" | "SUCCESS";
  status: "UNREAD" | "READ";
  recipientId: string;
  createdAt: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/notifications");
      setNotifications(response.data.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch notifications");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const markAsRead = async (id: string) => {
    try {
      await api.patch(`/notifications/${id}`, { status: "READ" });
      setNotifications(
        notifications.map((n) => (n.id === id ? { ...n, status: "READ" } : n)),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      await api.delete(`/notifications/${id}`);
      setNotifications(notifications.filter((n) => n.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "INFO":
        return "bg-blue-100 text-blue-800";
      case "WARNING":
        return "bg-yellow-100 text-yellow-800";
      case "ERROR":
        return "bg-red-100 text-red-800";
      case "SUCCESS":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <button
            onClick={() => {
              notifications
                .filter((n) => n.status === "UNREAD")
                .forEach((n) => markAsRead(n.id));
            }}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Check className="w-5 h-5" />
            Mark All as Read
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow p-6 ${notification.status === "UNREAD" ? "border-l-4 border-indigo-600" : ""}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(notification.type)}`}
                    >
                      {notification.type}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {notification.title}
                    </h3>
                    {notification.status === "UNREAD" && (
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-600">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(notification.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  {notification.status === "UNREAD" && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Mark as read"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {notifications.length === 0 && (
            <div className="p-6 text-center text-gray-500 bg-white rounded-lg shadow">
              No notifications found
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
