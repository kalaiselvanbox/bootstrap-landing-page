import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function ErrorElement() {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <p>{error.status}</p>
      <img src="https://tse4.mm.bing.net/th?id=OIP.qdlp3f9jZyPKnC3YL9LaxwHaE8&pid=Api&P=0&h=220" />
    </div>
  );
}
