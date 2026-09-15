"use client";

import {useState, useSyncExternalStore} from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateLabel = (date: Date) => date.toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric"});

const subscribe = () => () => {};

export function InfoSessionCalendar() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  return mounted ? <LocalCalendar/> : <p role="status">Loading the Sunday session calendar…</p>;
}

function LocalCalendar() {
  const [today] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });
  const [selected, setSelected] = useState(() => {
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + (7 - today.getDay()) % 7);
    return nextSunday;
  });
  const [month, setMonth] = useState(() => new Date(selected.getFullYear(), selected.getMonth(), 1));

  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Math.ceil((month.getDay() + days) / 7) * 7;
  const previousDisabled = month.getFullYear() === today.getFullYear() && month.getMonth() === today.getMonth();

  return <div className="info-calendar-layout">
    <div className="info-calendar">
      <div className="info-calendar-nav">
        <button type="button" aria-label="Previous month" disabled={previousDisabled} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>←</button>
        <h2 aria-live="polite">{month.toLocaleDateString("en-US", {month: "long", year: "numeric"})}</h2>
        <button type="button" aria-label="Next month" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>→</button>
      </div>
      <p className="info-calendar-legend">Select a highlighted Sunday · Info sessions every week</p>
      <table className="info-calendar-table">
        <caption>Sunday info session dates</caption>
        <thead><tr>{weekdays.map(day => <th scope="col" key={day}>{day}</th>)}</tr></thead>
        <tbody>{Array.from({length: cells / 7}, (_, week) => <tr key={week}>
          {Array.from({length: 7}, (_, weekday) => {
            const day = week * 7 + weekday - month.getDay() + 1;
            if (day < 1 || day > days) return <td key={weekday}/>;
            const date = new Date(month.getFullYear(), month.getMonth(), day);
            const available = weekday === 0 && date >= today;
            const isSelected = date.getTime() === selected.getTime();
            return <td key={weekday}>{available
              ? <button type="button" className="info-calendar-date" aria-pressed={isSelected} aria-label={`${dateLabel(date)}, info session`} onClick={() => setSelected(date)}>{day}<span aria-hidden="true">Info session</span></button>
              : <span className={`info-calendar-day${date < today ? " is-past" : ""}`}>{day}</span>}</td>;
          })}
        </tr>)}</tbody>
      </table>
    </div>
    <aside className="info-session-details" aria-live="polite" aria-atomic="true">
      <p className="eyebrow">Sunday info session</p>
      <h2>{dateLabel(selected)}</h2>
      <p>Get to know Vertex Research and find the program that fits your interests.</p>
      <ul><li>Explore our three research programs</li><li>Learn how one-on-one mentorship works</li><li>Ask questions about your research journey</li></ul>
      <p className="info-session-timing">Session time and joining details will be announced here.</p>
    </aside>
  </div>;
}
