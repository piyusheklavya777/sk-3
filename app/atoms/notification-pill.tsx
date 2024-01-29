"use client";
// notification pill fixed at top of screen.

import { useEffect } from "react";
import { useNotificationStore } from "../zustand/notification.store";
import Typewriter from "typewriter-effect";
import clsx from "clsx";
export const NotificationPill: React.FC = () => {
  const { notifications, removeNotification } = useNotificationStore();

  // after 5 seconds, call removeNotification with the id of the notification

  const notificationToShow = notifications.length
    ? notifications[0]
    : undefined;

  useEffect(() => {
    if (notificationToShow) {
      const duration = Math.ceil(50.7807 * notificationToShow?.message.length);
      setTimeout(() => {
        removeNotification(notificationToShow.id);
      }, duration);
    }
  }, [notifications, notificationToShow, removeNotification]);

  if (!notificationToShow) {
    return <></>;
  }

  // const notificationClasses = clsx(
  //   "flex flex-col jc is gap-y-2 rounded-[16px] mx-5 p-2 w-full max-w-lg border-l-8",
  //   {
  //     "bg-gradient-to-r from-red-900 via-red-800 to-red-500/50 border-red-500/50":
  //       notificationToShow.type === "error",
  //     "bg-gradient-to-r from-green-900 via-green-800 to-green-500/50 border-green-500/50":
  //       notificationToShow.type === "success",
  //   }
  // );

  return (
    <div
      id="notif-pill-cont-oby3tg4"
      className={clsx(
        "flex flex-col jc is gap-y-2 rounded-[16px] mx-5 p-2 w-full max-w-lg border-l-8",
        {
          "bg-gradient-to-r from-red-900 via-red-800 to-red-500/50 border-red-500/30":
            notificationToShow.type === "error",
          "bg-gradient-to-r from-green-900 via-green-800 to-green-500/50 border-green-500/50":
            notificationToShow.type === "success",
        }
      )}
    >
      <p
        id="notification-title-bhjrjwvl"
        className="text-white font-lato font-thin text-3xl bg-black/20 px-1 py-2 w-full rounded-[8px]"
      >
        {notificationToShow.heading || notificationToShow?.type === "error"
          ? `Oops! Something's off`
          : "Yay!"}
      </p>

      <p
        id="notification-text-tg3ug34"
        className=" max-w-prose text-white font-lato font-thin text-md text-wrap pl-2"
      >
        <Typewriter
          options={{
            //   autoStart: true,
            delay: 16,
            deleteSpeed: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              // .pauseFor(1500)
              // .typeString(
              //   ` lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec.`
              // )
              .typeString(notificationToShow.message)

              .start();
          }}
        />
      </p>
      <div
        id="dismiss-btn-flex-cont-puuwrpqv48"
        className="w-full flex je ic gap-x-2"
      >
        <button
          id="dismiss-btn-tvuh3pwtf"
          className="text-red-100 font-poppins font-thin text-lg rounded-[7px] bg-black/30 px-[20px] py-2"
          onClick={() => removeNotification(notificationToShow.id)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
