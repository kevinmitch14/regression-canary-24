import React from "react";
import { testActionTestPage } from "../actions";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <div>
      <p>Time: {new Date().getTime()}</p>
      <form action={testActionTestPage}>
        <button>Submit</button>
      </form>
    </div>
  );
}
