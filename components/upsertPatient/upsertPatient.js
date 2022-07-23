import styles from "./upsertPatient.module.css";
import PatientForm from "../patientForm/patientForm";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Modal from "../successModal/successModal";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import ShortTextInput from "../input/shortTextInput/shortTextInput";
import NumberInput from "../input/numberInput/numberInput";
import SelectInput from "../input/selectInput/selectInput";
import DateInput from "../input/dateInput/dateInput";
import GroupInput from "../input/groupInput/groupInput";
import LongTextInput from "../input/longTextInput/longTextInput";
import SwitchInput from "../input/switchInput/switchInput";
import NumberGrid from "../input/numberGrid/numberGrid";

import plusImg from "../../public/images/plus.svg";
import editImg from "../../public/images/edit-white.svg";

import {
  CATEGORIES,
  CONSULTANTS,
  DIAGNOSES,
  PCS,
  SEXES,
  SPECIALTIES,
  WARDS,
  INVESTIGATIONS,
} from "../data";

export default ({ op, handleSubmit, initialData, q }) => {
  const router = useRouter();

  const addOp = op === "add";

  const title = addOp ? "Add Patient" : "Edit Patient";
  const modalMsg = addOp
    ? "Patient successfuly added!"
    : "Patient successfuly updated!";
  const btnTxt = addOp ? "Add Patient" : "Edit Patient";
  const btnIcon = addOp ? plusImg : editImg;

  const modalRef = useRef();

  const modalOpen = () => {
    const modalElement = modalRef.current;

    const bsModal = new bootstrap.Modal(modalElement, {
      backdrop: "static",
      keyboard: false,
    });

    bsModal.show();
  };

  const modalClose = () => {
    const modalElement = modalRef.current;
    const bsModal = bootstrap.Modal.getInstance(modalElement);
    bsModal.hide();
    router.push("/");
  };

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const initialState = {
    firstName: "",
    surName: "",
    mrn: "",
    age: "",
    sex: "",
    ward: "",
    specialty: SPECIALTIES[0],
    consultant: CONSULTANTS[0],
    sho1: "",
    sho2: "",
    fy1a: "",
    fy1b: "",
    nightSho: "",
    spr: "",
    doa: "",
    pc: PCS[0],
    pcDetail: "",
    diagnosisOnAdmission: DIAGNOSES[0],
    diagnosisOnAdmissionDetail: "",
    confirmedDiagnosis: DIAGNOSES[0],
    confirmedDiagnosisDetail: "",
    history: "",
    plan: "",
    dateOfSurgery: "",
    procedure: "",
    category: CATEGORIES[0],
    vte: false,
    edd: "",
    deceased: false,
    dateOfDeath: "",
    teaching: false,
    elective: false,
    takeList: false,
    weekendList: false,
    discharged: false,
    investigation: INVESTIGATIONS[0],
    investigationDetail: "",
    dateOfBloods1: "",
    hb1: "",
    wcc1: "",
    na1: "",
    k1: "",
    urea1: "",
    cr1: "",
    gfr1: "",
    crp1: "",
    inr1: "",
    platelets1: "",
    lactates1: "",
    bilirubin1: "",
    ast1: "",
    alt1: "",
    alp1: "",
    lip1: "",
    dateOfBloods2: "",
    hb2: "",
    wcc2: "",
    na2: "",
    k2: "",
    urea2: "",
    cr2: "",
    gfr2: "",
    crp2: "",
    inr2: "",
    platelets2: "",
    lactates2: "",
    bilirubin2: "",
    ast2: "",
    alt2: "",
    alp2: "",
    lip2: "",
  };

  const [state, setState] = addOp
    ? useState(() => {
        let attr = {};
        if (q?.speciality) {
          attr = { specialty: q.speciality };
        } else if (q?.takeList) {
          attr = { takeList: true };
        } else if (q?.weekendList) {
          attr = { weekendList: true };
        }

        return {
          ...initialState,
          ...attr,
        };
      })
    : useState(initialData);

  const handleCancel = (e) => {
    setState(initialState);
    router.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const getPlacement = (addRow, addSection, editRow, editSection) => {
    let add = null;
    if (!!addRow && !!addSection) {
      add = {
        row: addRow,
        section: addSection,
      };
    }

    let edit = null;
    if (!!editRow && !!editSection) {
      edit = {
        row: editRow,
        section: editSection,
      };
    }

    return {
      add: add,
      edit: edit,
    };
  };

  const sections = [
    {
      title: "Patient Details",
      id: "patientDetails",
    },
    {
      title: "Team",
      id: "team",
    },
    {
      title: "Admission Details",
      id: "admissionDetails",
    },
    {
      title: "Investigations",
      id: "investigations",
    },
  ];

  const conf = [
    {
      ...getPlacement(1, sections[0], 1, sections[0]),
      type: ShortTextInput,
      props: {
        id: "firstName",
        fieldName: "First Name",
        placeholder: "John",
        value: state.firstName,
      },
    },
    {
      ...getPlacement(2, sections[0], 2, sections[0]),
      type: ShortTextInput,
      props: {
        id: "surName",
        fieldName: "Surname",
        placeholder: "Doe",
        value: state.surName,
      },
    },
    {
      ...getPlacement(3, sections[0], 3, sections[0]),
      type: ShortTextInput,
      props: {
        id: "mrn",
        fieldName: "MRN",
        placeholder: "M00047876",
        value: state.mrn,
      },
    },
    {
      ...getPlacement(4, sections[0], 4, sections[0]),
      type: NumberInput,
      props: {
        id: "age",
        fieldName: "Age",
        placeholder: 40,
        value: state.age,
      },
    },
    {
      ...getPlacement(4, sections[0], 4, sections[0]),
      type: SelectInput,
      props: {
        id: "sex",
        fieldName: "Sex",
        optionsList: SEXES,
        value: state.sex,
      },
    },
    {
      ...getPlacement(5, sections[0], 5, sections[0]),
      type: SelectInput,
      props: {
        id: "ward",
        fieldName: "Ward",
        optionsList: WARDS,
        value: state.ward,
      },
    },
    {
      ...getPlacement(3, sections[2], 1, sections[1]),
      type: SelectInput,
      props: {
        id: "specialty",
        fieldName: "Specialty",
        optionsList: SPECIALTIES,
        value: state.specialty,
      },
    },
    {
      ...getPlacement(2, sections[2], null, sections[1]),
      type: SelectInput,
      props: {
        id: "consultant",
        fieldName: "Consultant",
        optionsList: CONSULTANTS,
        value: state.consultant,
      },
    },
    {
      ...getPlacement(null, null, 3, sections[1]),
      type: ShortTextInput,
      props: {
        id: "sho1",
        fieldName: "SHO1",
        placeholder: "Jonathan Van Dellen",
        value: state.sho1,
      },
    },
    {
      ...getPlacement(null, null, 3, sections[1]),
      type: ShortTextInput,
      props: {
        id: "sho2",
        fieldName: "SHO2",
        placeholder: "Anna Walsh",
        value: state.sho2,
      },
    },
    {
      ...getPlacement(null, null, 4, sections[1]),
      type: ShortTextInput,
      props: {
        id: "fy1a",
        fieldName: "FY1A",
        placeholder: "George Mantides",
        value: state.fy1a,
      },
    },
    {
      ...getPlacement(null, null, 4, sections[1]),
      type: ShortTextInput,
      props: {
        id: "fy1b",
        fieldName: "FY1B",
        placeholder: "David Westbroek",
        value: state.fy1b,
      },
    },
    {
      ...getPlacement(null, null, 5, sections[1]),
      type: ShortTextInput,
      props: {
        id: "nightSho",
        fieldName: "Night SHO",
        placeholder: "Paul Dent",
        value: state.nightSho,
      },
    },
    {
      ...getPlacement(null, null, 5, sections[1]),
      type: ShortTextInput,
      props: {
        id: "spr",
        fieldName: "SPR",
        placeholder: "Rhys Thomas",
        value: state.spr,
      },
    },
    {
      ...getPlacement(1, sections[2], 1, sections[2]),
      type: DateInput,
      props: {
        id: "doa",
        fieldName: "Date of admission",
        value: state.doa,
      },
    },
    {
      ...getPlacement(4, sections[2], 2, sections[2]),
      type: GroupInput,
      props: {
        id: "pc",
        fieldName: "Presenting complaint",
        selOptionsList: PCS,
        selValue: state.pc,
        txtValue: state.pcDetail,
      },
    },
    {
      ...getPlacement(5, sections[2], 3, sections[2]),
      type: GroupInput,
      props: {
        id: "diagnosisOnAdmission",
        fieldName: "Diagnosis on Admission",
        selOptionsList: DIAGNOSES,
        selValue: state.diagnosisOnAdmission,
        txtValue: state.diagnosisOnAdmissionDetail,
      },
    },
    {
      ...getPlacement(null, null, 4, sections[2]),
      type: GroupInput,
      props: {
        id: "confirmedDiagnosis",
        fieldName: "Confirmed Diagnosis",
        selOptionsList: DIAGNOSES,
        selValue: state.confirmedDiagnosis,
        txtValue: state.confirmedDiagnosisDetail,
      },
    },
    {
      ...getPlacement(6, sections[2], 5, sections[2]),
      type: LongTextInput,
      props: {
        id: "history",
        fieldName: "History",
        value: state.history,
      },
    },
    {
      ...getPlacement(7, sections[2], 6, sections[2]),
      type: LongTextInput,
      props: {
        id: "plan",
        fieldName: "Plan",
        value: state.plan,
      },
    },
    {
      ...getPlacement(null, null, 7, sections[2]),
      type: DateInput,
      props: {
        id: "dateOfSurgery",
        fieldName: "Date of surgery",
        value: state.dateOfSurgery,
      },
    },
    {
      ...getPlacement(null, null, 8, sections[2]),
      type: LongTextInput,
      props: {
        id: "procedure",
        fieldName: "Procedure",
        value: state.procedure,
      },
    },
    {
      ...getPlacement(8, sections[2], 9, sections[2]),
      type: SelectInput,
      props: {
        id: "category",
        fieldName: "Category",
        optionsList: CATEGORIES,
        value: state.category,
      },
    },
    {
      ...getPlacement(9, sections[2], 10, sections[2]),
      type: SwitchInput,
      props: {
        id: "vte",
        fieldName: "VTE",
        value: state.vte,
      },
    },
    {
      ...getPlacement(null, null, 11, sections[2]),
      type: DateInput,
      props: {
        id: "edd",
        fieldName: "EDD",
        value: state.edd,
      },
    },
    {
      ...getPlacement(null, null, 12, sections[2]),
      type: SwitchInput,
      props: {
        id: "deceased",
        fieldName: "Deceased",
        value: state.deceased,
      },
    },
    {
      ...getPlacement(null, null, 13, sections[2]),
      type: DateInput,
      props: {
        id: "dateOfDeath",
        fieldName: "DOD",
        value: state.dateOfDeath,
      },
    },
    {
      ...getPlacement(null, null, 14, sections[2]),
      type: SwitchInput,
      props: {
        id: "teaching",
        fieldName: "Teaching",
        value: state.teaching,
      },
    },
    {
      ...getPlacement(10, sections[2], 15, sections[2]),
      type: SwitchInput,
      props: {
        id: "elective",
        fieldName: "Elective",
        value: state.elective,
      },
    },
    {
      ...getPlacement(11, sections[2], 16, sections[2]),
      type: SwitchInput,
      props: {
        id: "takeList",
        fieldName: "Take List",
        value: state.takeList,
      },
    },
    {
      ...getPlacement(null, null, 17, sections[2]),
      type: SwitchInput,
      props: {
        id: "weekendList",
        fieldName: "Weekend List",
        value: state.weekendList,
      },
    },
    {
      ...getPlacement(null, null, 18, sections[2]),
      type: SwitchInput,
      props: {
        id: "discharged",
        fieldName: "Discharged",
        value: state.discharged,
      },
    },
    {
      ...getPlacement(1, sections[3], 1, sections[3]),
      type: GroupInput,
      props: {
        id: "investigation",
        fieldName: "Investigation",
        selOptionsList: INVESTIGATIONS,
        selValue: state.investigation,
        txtValue: state.investigationDetail,
      },
    },
    {
      ...getPlacement(2, sections[3], 2, sections[3]),
      type: DateInput,
      props: {
        id: "dateOfBloods1",
        fieldName: "Date of Bloods",
        value: state.dateOfBloods1,
      },
    },
    {
      ...getPlacement(3, sections[3], 3, sections[3]),
      type: NumberGrid,
      props: {
        rows: [
          [
            {
              id: "hb1",
              fieldName: "Hb",
              value: state.hb1,
            },
            {
              id: "wcc1",
              fieldName: "WCC",
              value: state.wcc1,
            },
            {
              id: "na1",
              fieldName: "Na",
              value: state.na1,
            },
            {
              id: "k1",
              fieldName: "K",
              value: state.k1,
            },
          ],
          [
            {
              id: "urea1",
              fieldName: "Urea",
              value: state.urea1,
            },
            {
              id: "cr1",
              fieldName: "Cr",
              value: state.cr1,
            },
            {
              id: "gfr1",
              fieldName: "GFR",
              value: state.gfr1,
            },
            {
              id: "crp1",
              fieldName: "CRP",
              value: state.crp1,
            },
          ],
          [
            {
              id: "inr1",
              fieldName: "INR",
              value: state.inr1,
            },
            {
              id: "platelets1",
              fieldName: "Platelets",
              value: state.platelets1,
            },
            {
              id: "lactates1",
              fieldName: "Lactate",
              value: state.lactates1,
            },
            {
              id: "bilirubin1",
              fieldName: "Bilirubin",
              value: state.bilirubin1,
            },
          ],
          [
            {
              id: "ast1",
              fieldName: "AST",
              value: state.ast1,
            },
            {
              id: "alt1",
              fieldName: "ALT",
              value: state.alt1,
            },
            {
              id: "alp1",
              fieldName: "ALP",
              value: state.alp1,
            },
            {
              id: "lip1",
              fieldName: "Lip",
              value: state.lip1,
            },
          ],
        ],
      },
    },
    {
      ...getPlacement(null, null, 4, sections[3]),
      type: DateInput,
      props: {
        id: "dateOfBloods2",
        fieldName: "Date of Bloods 2",
        value: state.dateOfBloods2,
      },
    },
    {
      ...getPlacement(null, null, 5, sections[3]),
      type: NumberGrid,
      props: {
        rows: [
          [
            {
              id: "hb2",
              fieldName: "Hb",
              value: state.hb2,
            },
            {
              id: "wcc2",
              fieldName: "WCC",
              value: state.wcc2,
            },
            {
              id: "na2",
              fieldName: "Na",
              value: state.na2,
            },
            {
              id: "k2",
              fieldName: "K",
              value: state.k2,
            },
          ],
          [
            {
              id: "urea2",
              fieldName: "Urea",
              value: state.urea2,
            },
            {
              id: "cr2",
              fieldName: "Cr",
              value: state.cr2,
            },
            {
              id: "gfr2",
              fieldName: "GFR",
              value: state.gfr2,
            },
            {
              id: "crp2",
              fieldName: "CRP",
              value: state.crp2,
            },
          ],
          [
            {
              id: "inr2",
              fieldName: "INR",
              value: state.inr2,
            },
            {
              id: "platelets2",
              fieldName: "Platelets",
              value: state.platelets2,
            },
            {
              id: "lactates2",
              fieldName: "Lactate",
              value: state.lactates2,
            },
            {
              id: "bilirubin2",
              fieldName: "Bilirubin",
              value: state.bilirubin2,
            },
          ],
          [
            {
              id: "ast2",
              fieldName: "AST",
              value: state.ast2,
            },
            {
              id: "alt2",
              fieldName: "ALT",
              value: state.alt2,
            },
            {
              id: "alp2",
              fieldName: "ALP",
              value: state.alp2,
            },
            {
              id: "lip2",
              fieldName: "Lip",
              value: state.lip2,
            },
          ],
        ],
      },
    },
  ];

  const getConf = ({ addOp }) => {
    const dict = {};

    const refIndex = 0;
    conf
      .filter((el) => (addOp ? !!el.add : !!el.edit))
      .forEach((el) => {
        const section = addOp ? el.add.section : el.edit.section;
        const row = addOp ? el.add.row : el.edit.row;

        delete el.add;
        delete el.edit;

        if (dict[section.id] === undefined) {
          dict[section.id] = {
            section: section,
            fields: [],
          };
        }

        if (dict[section.id]["fields"][row] === undefined) {
          dict[section.id]["fields"][row] = el;
        } else {
          const temp = dict[section.id]["fields"][row];
          if (Array.isArray(temp)) {
            temp.push(el);
            dict[section.id]["fields"][row] = temp;
          } else {
            dict[section.id]["fields"][row] = [temp, el];
          }
        }
      });

    return Object.values(dict);
  };

  const getSections = ({ addOp }) => {
    if (addOp) {
      sections.splice(1, 1);
      return sections;
    } else {
      return sections;
    }
  };

  // useEffect(() => {
  //   var scrollSpyContentEl = document.querySelector('[data-bs-spy="scroll"]');
  //   console.log(scrollSpyContentEl);
  //   const instance = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl);
  //   console.log(instance);
  //   instance.refresh();
  // }, []);

  return (
    <>
      <Header />
      <main className="d-flex">
        <Sidebar sectionList={getSections({ addOp })} />
        <div
          data-bs-spy="scroll"
          data-bs-target="#sidebar"
          className={styles.upsertPatient}
          tabIndex="0"
          data-bs-offset="132"
        >
          <div className={styles.upsertPatientTitle}>{title}</div>
          <PatientForm
            formConf={
              addOp ? getConf({ addOp: true }) : getConf({ addOp: false })
            }
            handleCancel={handleCancel}
            handleSubmit={() => {
              handleSubmit(state);
              modalOpen();
            }}
            handleChange={handleChange}
            successBtnTxt={btnTxt}
            successBtnIcon={btnIcon}
          />
        </div>
      </main>
      <Modal
        messageTxt={modalMsg}
        closeHandler={modalClose}
        modalRef={modalRef}
      />
    </>
  );
};
