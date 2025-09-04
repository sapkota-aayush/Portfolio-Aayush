import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faBuilding, faSchool, faUserTie, faSeedling, faWrench } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern (Co-op)</h3>
            <h4 className="vertical-timeline-element-subtitle">Empire Life - Kingston, ON</h4>
            <p>
              Hands-on software development in co-op setting, building enterprise applications
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Front Desk Representative</h3>
            <h4 className="vertical-timeline-element-subtitle">Student Association of St. Lawrence College</h4>
            <p>
              Front-facing role, coordination, and support for student services
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUserTie} />}
          >
            <h3 className="vertical-timeline-element-title">Peer Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Employed - Remote</h4>
            <p>
              Tutored students in Arduino and programming fundamentals, assisted in project development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - Apr 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSeedling} />}
          >
            <h3 className="vertical-timeline-element-title">Website Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle">Sustainable Kingston - Hybrid</h4>
            <p>
              Managed website content, design, technical issues, analytics, and community engagement
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2023 - Apr 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faWrench} />}
          >
            <h3 className="vertical-timeline-element-title">Automotive Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Mr. Lube Canada</h4>
            <p>
              Tire maintenance, customer service, inventory management, team collaboration
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;