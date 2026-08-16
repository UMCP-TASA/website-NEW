import { useState } from "react";
import { Card } from "react-bootstrap";

export default function Goals() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "repeat(2, minmax(100px, auto))",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", gap: "16px", padding: `20px` }}>
        <GoalAwareness />
        <GoalLiaison />
        <GoalForum />
      </div>
      <div style={{ display: "flex", gap: "16px", padding: `20px` }}>
        <GoalInform />
        <GoalSupport />
        <GoalRelationships />
      </div>
    </div>
  );
}

function GoalAwareness() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Awareness </Card.Title>
          <Card.Text>
            Promote awareness of Taiwanese and Taiwanese American culture,
            language, history, and current affairs
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function GoalLiaison() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Liaison </Card.Title>
          <Card.Text>
            Serve as the liaison for the Taiwanese and Taiwanese American
            individuals at the University of Maryland, College Park
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function GoalForum() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Forum </Card.Title>
          <Card.Text>
            Provide the forum needed for the exchange of information, ideas, and
            feelings among individuals of the Taiwanese and Taiwanese American
            community
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function GoalInform() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Inform </Card.Title>
          <Card.Text>
            Inform students and members at the university on the various
            political news in the Taiwanese community
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
function GoalSupport() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Support </Card.Title>
          <Card.Text>
            Support social and educational events and develop programs that will
            benefit the Taiwanese and Taiwanese American community as a whole
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
function GoalRelationships() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Relationships </Card.Title>
          <Card.Text>
            Develop strong relationships with other organizations at the
            University of Maryland, the administration, and other organizations
            nationwide, in order to communicate and fulfill our needs and goals
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
