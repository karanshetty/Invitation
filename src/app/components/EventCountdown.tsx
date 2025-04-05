'use client';

import { useState, useEffect } from "react";

interface CountdownProps {
  title: string;
  date: string;
  time: string;
  description: string;
  targetDate: string;
}

const EventCountdown = ({ title, date, time, description, targetDate }: CountdownProps) => {
  const useCountdown = (targetDate: string) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    useEffect(() => {
      const target = new Date(targetDate);

      const timer = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
  };

  const countdown = useCountdown(targetDate);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl text-pink-600 font-great-vibes mb-4">
        {title}
      </h2>
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-xl text-gray-800 font-medium">
            {date}
          </p>
          <p className="text-lg text-gray-600 mt-1">
            {time}
          </p>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-lg text-gray-800 mb-3 font-medium">{title} Begins In:</p>
        <div className="grid grid-cols-4 gap-2">
          <div className="text-center">
            <div className="text-xl font-medium text-pink-600">{countdown.days}</div>
            <div className="text-xs text-gray-600">Days</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-medium text-pink-600">{countdown.hours}</div>
            <div className="text-xs text-gray-600">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-medium text-pink-600">{countdown.minutes}</div>
            <div className="text-xs text-gray-600">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-medium text-pink-600">{countdown.seconds}</div>
            <div className="text-xs text-gray-600">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown; 