import UpsertPatient from "../../components/upsertPatient/upsertPatient";
import { PrismaClient } from "@prisma/client";

export default ({ patient }) => {
  const handleSubmit = (state) => {
    fetch(`/api/editPatient/${patient.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  };

  return (
    <>
      <UpsertPatient
        op={"update"}
        handleSubmit={handleSubmit}
        initialData={patient}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const q = context.query.q;
  const attr = context.query.attr || "id";
  const prisma = new PrismaClient();

  const patient = await prisma.patient.findFirst({
    where: {
      [attr]: attr === "id" ? Number(q) : q,
    },
  });

  if (!patient) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      patient,
    },
  };
}
