import React from "react";
import { testActionHome } from "./actions";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <div>
      <p>Time: {new Date().getTime()}</p>
      <form action={testActionHome}>
        <button>Submit</button>
      </form>
    </div>
  );
}
