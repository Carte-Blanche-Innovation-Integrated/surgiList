import PatientList from "../components/patientList/patientList";
import { PrismaClient } from "@prisma/client";

export default ({ items }) => {
  return (
    <>
      <PatientList selectedTab={"weekend"} patientList={items} />
    </>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  let items = await prisma.patient.findMany({
    where: {
      weekendList: true,
    },
  });
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
