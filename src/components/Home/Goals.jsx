import { useState } from "react";
import { Card } from "react-bootstrap";

const goals = [
  {
    title: "Awareness",
    text: "Promote awareness of Taiwanese and Taiwanese American culture, language, history, and current affairs",
  },
  {
    title: "Liaison",
    text: "Serve as the liaison for the Taiwanese and Taiwanese American individuals at the University of Maryland, College Park",
  },
  {
    title: "Forum",
    text: "Provide the forum needed for the exchange of information, ideas, and feelings among individuals of the Taiwanese and Taiwanese American",
  },
  {
    title: "Inform",
    text: "Inform students and members at the university on the various political news in the Taiwanese community",
  },
  {
    title: "Support",
    text: " Support social and educational events and develop programs that will benefit the Taiwanese and Taiwanese American community as a whole",
  },
  {
    title: "Relationships",
    text: "Develop strong relationships with other organizations at the University of Maryland, the administration, and other organizations nationwide, in order to communicate and fulfill our needs and goals",
  },
];

/* splitting goals into two rows of three */
const goalsRows = [goals.slice(0, 3), goals.slice(3, 6)];

export default function Goals() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "stretch",
        gap: "16px",
      }}
    >
      {goalsRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", gap: "16px", padding: `20px` }}
        >
          {row.map((goal) => (
            <CardStyle
              key={goal.title} title={goal.title} text={goal.text}
            ></CardStyle>
          ))}
        </div>
      ))}
    </div>
  );
}

function CardStyle({ title, text }) {
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text> {text} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
