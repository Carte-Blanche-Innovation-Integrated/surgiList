import UpsertPatient from "../components/upsertPatient/upsertPatient";
import { useRouter } from "next/router";
import { useState } from "react";

export default () => {
  const handleSubmit = (state) => {
    fetch("/api/createPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  };

  const router = useRouter();

  const [addQuery, setAddQuery] = useState(router.query);

  return (
    <>
      <UpsertPatient op={"add"} handleSubmit={handleSubmit} q={addQuery} />
    </>
  );
};
