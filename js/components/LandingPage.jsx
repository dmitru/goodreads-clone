import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <h1>Welcome to BestReads!</h1>
      <Link to="/books">Go to Books collection</Link>
    </div>
  );
}
