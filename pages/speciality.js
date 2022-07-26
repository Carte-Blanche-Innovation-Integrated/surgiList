import PatientList from "../components/patientList/patientList";
import { PrismaClient } from "@prisma/client";

export default ({ items }) => {
  return (
    <>
      <PatientList selectedTab={"speciality"} patientList={items} />
    </>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  let items = await prisma.patient.findMany(
    {
      where: {
        OR: [
          {
            discharged: false,
          },
          {
            discharged: null,
          }
        ]
      }
    }
  );
  await prisma.$disconnect();
  if (items === undefined || items.length == 0) {
    items = null;
  }
  return {
    props: {
      items,
    },
  };
}
