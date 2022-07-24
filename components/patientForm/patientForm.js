import AddContainer from "../patientFormSectionContainer/patientFormSectionContainer";
import Footer from "../footer/footer";
import { forwardRef } from "react";
import ScrollSpy from "react-ui-scrollspy";

const PatientForm = forwardRef(
  (
    {
      formConf,
      handleChange,
      handleCancel,
      handleSubmit,
      successBtnTxt,
      successBtnIcon,
    },
    ref
  ) => {
    return (
      <>
        <form>
          <ScrollSpy
            parentScrollContainerRef={ref}
            scrollThrottle={20}
            activeClass="active"
            offsetTop={144}
          >
            {formConf.map((conf, index) => {
              return (
                <AddContainer
                  key={conf.section.id}
                  id={conf.section.id}
                  title={conf.section.title}
                  isFirst={index === 0}
                >
                  {conf.fields.map((field, index) => {
                    if (Array.isArray(field)) {
                      return (
                        <div key={index} className="row">
                          {field.map((inner, index) => {
                            return (
                              <div key={index} className="col">
                                <inner.type
                                  {...inner.props}
                                  handleOnChange={handleChange}
                                />
                              </div>
                            );
                          })}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={field.props.id ? field.props.id : index}
                          className="row"
                        >
                          <div className="col">
                            <field.type
                              {...field.props}
                              handleOnChange={handleChange}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </AddContainer>
              );
            })}
          </ScrollSpy>
          <Footer
            btnTxt={successBtnTxt}
            btnIcon={successBtnIcon}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
          />
        </form>
      </>
    );
  }
);

export default PatientForm;
