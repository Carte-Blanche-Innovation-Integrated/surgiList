import AddContainer from "../patientFormSectionContainer/patientFormSectionContainer";
import Footer from "../footer/footer";

export default ({
  formConf,
  handleChange,
  handleCancel,
  handleSubmit,
  successBtnTxt,
  successBtnIcon,
}) => {
  return (
    <>
      <form>
        {formConf.map((conf, index) => {
          return (
            <AddContainer
              key={conf.section.id}
              id={conf.section.id}
              title={conf.section.title}
              sectRef={conf.section.ref}
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

        <Footer
          btnTxt={successBtnTxt}
          btnIcon={successBtnIcon}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      </form>
    </>
  );
};
