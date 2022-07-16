import React, { useState } from "react";

import styles from "./addPatientForm.module.css";

import AddContainer from "../addPatientSectionContainer/addPatientSectionContainer";

import ShortTextInput from "../../input/shortTextInput/shortTextInput";
import NumberInput from "../../input/numberInput/numberInput";
import SelectInput from "../../input/selectInput/selectInput";
import DateInput from "../../input/dateInput/dateInput";
import GroupInput from "../../input/groupInput/groupInput";
import LongTextInput from "../../input/longTextInput/longTextInput";
import SwitchInput from "../../input/switchInput/switchInput";

import SECTIONS, { CATEGORIES, CONSULTANTS, DIAGNOSES, PCS, SEXES, SPECIALTIES, WARDS, INVESTIGATIONS } from "../../data";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [mrn, setMrn] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [ward, setWard] = useState("");
  const [doa, setDoa] = useState("");
  const [consultant, setConsultant] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [selPc, setSelPc] = useState("");
  const [txtPc, setTxtPc] = useState("");
  const [selDiagnosis, setSelDiagnosis] = useState("");
  const [txtDiagnosis, setTxtDiagnosis] = useState("");
  const [history, setHistory] = useState("");
  const [plan, setPlan] = useState("");
  const [category, setCategory] = useState("");
  const [vte, setVte] = useState(false);
  const [elective, setElective] = useState(false);
  const [takeList, setTakeList] = useState(false);
  const [selInvestigation, setSelInvestigation] = useState("");
  const [txtInvestigation, setTxtInvestigation] = useState("");
  const [dobds, setDobds] = useState("");

  const formConf = [
    {
      section: SECTIONS[0],
      fields: [
        {
          type: ShortTextInput,
          props: {
            id: "firstname",
            fieldName: "First Name",
            placeholder: "John",
            value: firstName,
            handleOnChange: setFirstName,
          },
        },
        {
          type: ShortTextInput,
          props: {
            id: "surname",
            fieldName: "Surname",
            placeholder: "Doe",
            value: surname,
            handleOnChange: setSurname,
          },
        },
        {
          type: ShortTextInput,
          props: {
            id: "mrn",
            fieldName: "MRN",
            placeholder: "M00047876",
            value: mrn,
            handleOnChange: setMrn,
          },
        },
        [
          {
            type: NumberInput,
            props: {
              id: "age",
              fieldName: "Age",
              placeholder: 40,
              value: age,
              handleOnChange: setAge,
            },
          },
          {
            type: SelectInput,
            props: {
              id: "sex",
              fieldName: "Sex",
              optionsList: SEXES,
              value: sex,
              handleOnChange: setSex,
            },
          },
        ],
        {
          type: SelectInput,
          props: {
            id: "ward",
            fieldName: "Ward",
            optionsList: WARDS,
            value: ward,
            handleOnChange: setWard,
          },
        },
      ],
    },
    {
      section: SECTIONS[1],
      fields: [
        {
          type: DateInput,
          props: {
            id: "date",
            fieldName: "Date of admission",
            value: doa,
            handleOnChange: setDoa,
          }
        },
        {
          type: SelectInput,
          props: {
            id: "consultant",
            fieldName: "Consultant",
            optionsList: CONSULTANTS,
            value: consultant,
            handleOnChange: setConsultant,
          }
        },
        {
          type: SelectInput,
          props: {
            id: "specialty",
            fieldName: "Specialty",
            optionsList: SPECIALTIES,
            value: specialty,
            handleOnChange: setSpecialty,
          }
        },
        {
          type: GroupInput,
          props: {
            id: "presentingComplaint",
            fieldName: "Presenting complaint",
            selOptionsList: PCS,
            selValue: selPc,
            handleSelOnChange: setSelPc,
            txtValue: txtPc,
            handleTxtOnChange: setTxtPc,
          }
        },
        {
          type: GroupInput,
          props: {
            id: "diagnosis",
            fieldName: "Diagnosis",
            selOptionsList: DIAGNOSES,
            selValue: selDiagnosis,
            handleSelOnChange: setSelDiagnosis,
            txtValue: txtDiagnosis,
            handleTxtOnChange: setTxtDiagnosis,
          }
        },
        {
          type: LongTextInput,
          props: {
            id: "history",
            fieldName: "History",
            value: history,
            handleOnChange: setHistory,
          }
        },
        {
          type: LongTextInput,
          props: {
            id: "plan",
            fieldName: "Plan",
            value: plan,
            handleOnChange: setPlan,
          }
        },
        {
          type: SelectInput,
          props: {
            id: "category",
            fieldName: "Category",
            optionsList: CATEGORIES,
            value: category,
            handleOnChange: setCategory,
          }
        },
        {
          type: SwitchInput,
          props: {
            id: "vte",
            fieldName: "VTE",
            value: vte,
            handleOnChange: setVte,
          }
        },
        {
          type: SwitchInput,
          props: {
            id: "elective",
            fieldName: "Elective",
            value: elective,
            handleOnChange: setElective,
          }
        },
        {
          type: SwitchInput,
          props: {
            id: "takeList",
            fieldName: "Take List",
            value: takeList,
            handleOnChange: setTakeList,
          }
        }
      ]
    },
    {
      section: SECTIONS[2],
      fields: [
        {
          type: GroupInput,
          props: {
            id: "investigations",
            fieldName: "Investigation",
            selOptionsList: INVESTIGATIONS,
            selValue: selInvestigation,
            handleSelOnChange: setSelInvestigation,
            txtValue: txtInvestigation,
            handleTxtOnChange: setTxtInvestigation,
          }
        },
        {
          type: DateInput,
          props: {
            id: "dateOfBloods",
            fieldName: "Date of Bloods",
            value: dobds,
            handleOnChange: setDobds,
          }
        }
      ]
    }
  ];

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(vte);
        }}
      >
        {formConf.map((conf) => {
          return (
            <AddContainer
              key={conf.section.id}
              id={conf.section.id}
              title={conf.section.title}
            >
              {conf.fields.map((field, index) => {
                if (Array.isArray(field)) {
                  return (
                    <div key={index} className="row">
                      {field.map((inner, index) => {
                        return (
                          <div key={index} className="col">
                            <inner.type {...inner.props} />
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div key={field.props.id} className="row">
                      <div className="col">
                        <field.type {...field.props} />
                      </div>
                    </div>
                  );
                }
              })}
            </AddContainer>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
