import React from 'react';
import { Row } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import { ai } from '../../../data/ai';

export const Ai = () => {

  return (
    <div>
      <Row>
        {
          ai.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </Row>
    </div>
  );
}

