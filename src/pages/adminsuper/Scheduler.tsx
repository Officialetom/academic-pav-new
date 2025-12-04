import React, { useState } from "react";
import "./styles/scheduler.css";
import tikeIcon from "./assets/tike.png"; // <-- keep tike.png in the same folder

type ScheduleTask = {
  id: string;
  title: string;
  description: string;
  schedule: string; // e.g. "Schedule: Daily at 2:00 AM"
  nextRun: string;  // e.g. "Next run: 2023-08-16 02:00:00"
  status: "Active" | "Inactive";
};

const SAMPLE_TASKS: ScheduleTask[] = [
  {
    id: "t1",
    title: "Daily Data Synchronization",
    description: "Sync data from all connected universities",
    schedule: "Schedule: Daily at 2:00 AM",
    nextRun: "Next run: 2023-08-16 02:00:00",
    status: "Active",
  },
  {
    id: "t2",
    title: "Weekly Analytics Report",
    description: "Generate and distribute analytics reports",
    schedule: "Schedule: Every Monday at 8:00 AM",
    nextRun: "Next run: 2023-08-21 08:00:00",
    status: "Active",
  },
  {
    id: "t3",
    title: "Monthly Compliance Audit",
    description: "Run compliance checks and generate audit logs",
    schedule: "Schedule: First day of month at 1:00 AM",
    nextRun: "Next run: 2023-09-01 01:00:00",
    status: "Active",
  },
  {
    id: "t4",
    title: "Data Quality Check",
    description: "Validate data integrity and quality metrics",
    schedule: "Schedule: Every 6 hours",
    nextRun: "Next run: 2023-08-15 18:00:00",
    status: "Active",
  },
];

function splitLabelValue(text: string) {
  const idx = text.indexOf(":");
  if (idx === -1) return { label: "", value: text };
  return {
    label: text.slice(0, idx + 1), // include colon
    value: text.slice(idx + 1).trim(),
  };
}

const Scheduler: React.FC = () => {
  // configuration local state (presentational)
  const [timezone, setTimezone] = useState<string>("UTC (Coordinated Universal Time)");
  const [maxConcurrent, setMaxConcurrent] = useState<number>(5);
  const [taskTimeout, setTaskTimeout] = useState<number>(60);
  const [retryPolicy, setRetryPolicy] = useState<string>("3 times with 5 min delay");
  const [sendEmail, setSendEmail] = useState<boolean>(true);
  const [logExecutions, setLogExecutions] = useState<boolean>(true);

  const handleSave = () => {
    alert("Scheduler configuration saved (placeholder)");
  };

  return (
    <div className="scheduler-wrap">
      <h3 className="scheduler-title">Automated Task Scheduler</h3>
      <p className="scheduler-sub">Configure automated tasks and data synchronization schedules.</p>

      <div className="tasks-list">
        {SAMPLE_TASKS.map((t, i) => {
          const sched = splitLabelValue(t.schedule);
          const next = splitLabelValue(t.nextRun);
          return (
            <div className="task-card" key={t.id} data-index={i}>
              <div className="task-grid">
                <div className="task-icon" aria-hidden>
                  <img src={tikeIcon} alt="icon" className="task-icon-img" />
                </div>

                <div className="task-title" title={t.title}>
                  {t.title}
                </div>

                {/* description + meta (description spans both columns) */}
                <div className="task-desc">{t.description}</div>

                <div className="task-meta">
                  <span className="task-schedule">
                    <span className="task-schedule-label">{sched.label}</span>{" "}
                    <span className="task-schedule-value">{sched.value}</span>
                  </span>

                  <span className="task-next">
                    <span className="task-next-label">{next.label}</span>{" "}
                    <span className="task-next-value">{next.value}</span>
                  </span>
                </div>
              </div>

              <div className="task-right">
                <span className={`status-pill ${t.status === "Active" ? "status-active" : "status-inactive"}`}>
                  {t.status}
                </span>
                <button className="task-edit" type="button">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="scheduler-config">
        <h4 className="config-title">Scheduler Configuration</h4>

        <div className="config-grid">
          <label className="config-field">
            <div className="config-label">Timezone</div>
            <select className="config-select" value={timezone} onChange={(e) => setTimezone(e.target.value)} aria-label="Timezone">
              <option>UTC (Coordinated Universal Time)</option>
              <option>Africa/Lagos</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
            </select>
          </label>

          <label className="config-field">
            <div className="config-label">Max Concurrent Tasks</div>
            <input
              type="number"
              className="config-input"
              value={maxConcurrent}
              onChange={(e) => setMaxConcurrent(Number(e.target.value))}
              min={1}
              aria-label="Max concurrent tasks"
            />
          </label>

          <label className="config-field">
            <div className="config-label">Task Timeout (minutes)</div>
            <input
              type="number"
              className="config-input"
              value={taskTimeout}
              onChange={(e) => setTaskTimeout(Number(e.target.value))}
              min={1}
              aria-label="Task timeout"
            />
          </label>

          <label className="config-field">
            <div className="config-label">Retry Failed Tasks</div>
            <select className="config-select" value={retryPolicy} onChange={(e) => setRetryPolicy(e.target.value)} aria-label="Retry failed tasks">
              <option>3 times with 5 min delay</option>
              <option>5 times with 10 min delay</option>
              <option>No retries</option>
            </select>
          </label>
        </div>

        <div className="config-checkboxes">
          <label className="checkbox-row">
            <input type="checkbox" checked={sendEmail} onChange={() => setSendEmail(!sendEmail)} />
            <span>Send email notifications on task failure</span>
          </label>

          <label className="checkbox-row">
            <input type="checkbox" checked={logExecutions} onChange={() => setLogExecutions(!logExecutions)} />
            <span>Log all task executions</span>
          </label>
        </div>
      </div>

      <div className="scheduler-save-area">
        <button className="scheduler-save-btn" onClick={handleSave}>
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default Scheduler;
