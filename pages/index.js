import Head from "next/head";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import PatientForm from "../components/addPatient/addPatient";

export default () => {
  return (
    <>
      <Head>
        <title>SurgiList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="d-flex">
        <Sidebar />
        <PatientForm />
      </main>
    </>
  );
};
