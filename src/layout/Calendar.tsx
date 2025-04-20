"use client";
import data from "@/data.json";
import { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSaturday,
  isSunday,
  isSameDay,
  parseISO,
} from "date-fns";
import { ko } from "date-fns/locale";
import { FaHeart } from "react-icons/fa6";

const Calendar = () => {
  const targetDate = parseISO(data.weddingInfo.date); // 결혼식 날짜

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const dday = format(targetDate, `yyyy. MM. dd`);
  const time = format(targetDate, `a h시 m분`, { locale: ko });

  const monthStart = startOfMonth(targetDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const daysInMonth = days.map((day) => ({
    day: format(day, "dd"),
    isDDay: isSameDay(day, targetDate),
    issunday: isSunday(day),
    isSaturday: isSaturday(day),
    rest: format(targetDate, "MM") !== format(day, "MM"),
  }));

  // 🔥 초까지 포함된 실시간 카운트다운 useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime(); // 남은 시간 (ms)

      if (diff <= 0) {
        setDay(0);
        setHour(0);
        setMin(0);
        setSec(0);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);

      const d = Math.floor(totalSeconds / (3600 * 24));
      const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      setDay(d);
      setHour(h);
      setMin(m);
      setSec(s);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="Calendar">
      <div className="inner">
        <div className="title">
          <p className="dday">{dday}</p>
          <p className="time">{time}</p>
        </div>

        <div className="body">
          <div className="week">
            {week.map((data, index) => (
              <span key={index} className={data === "일" ? "sun" : ""}>
                {data}
              </span>
            ))}
          </div>
          <div className="day">
            {daysInMonth.map((data, index) => (
              <span
                key={index}
                className={
                  data.isDDay
                    ? "dday"
                    : data.rest
                      ? "rest"
                      : data.issunday
                        ? "sun"
                        : data.isSaturday
                          ? "satur"
                          : "default"
                }
              >
                {data.day}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="time_panel">
            <div className="item">
              <p className="num">{day}</p>
              <p className="txt">Days</p>
            </div>
            <span>:</span>
            <div className="item">
              <p className="num">{hour}</p>
              <p className="txt">Hour</p>
            </div>
            <span>:</span>
            <div className="item">
              <p className="num">{min}</p>
              <p className="txt">Min</p>
            </div>
            <span>:</span>
            <div className="item">
              <p className="num">{sec}</p>
              <p className="txt">Sec</p>
            </div>
          </div>
          <div className="dday_text">
            동현<FaHeart />진희의 결혼식이 {day}일 남았습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
