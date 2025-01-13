import React from "react";
import { education } from "../../data/constants";
import "./goals.css";
import GoalsCard from "../cards/goalsCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Goals = () => {
  return (
    <div id="goals" className="education-container">
      <div className="education-wrapper">
        <p className="education-desc">Browse My</p>
        <h1 className="education-title">Long & Short Term Goals</h1>
        <div className="timeline-section">
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={education.id}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <GoalsCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Goals;
