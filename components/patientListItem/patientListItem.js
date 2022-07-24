import styles from "./patientListItem.module.css";
import Image from "next/image";
import consultantImg from "../../public/images/user-plus.svg";
import wardImg from "../../public/images/map-pin.svg";
import calendarImg from "../../public/images/calendar.svg";
import moment from "moment";

export default ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.row1}>
        <div className={styles.row1Left}>
          <div className={styles.name}>
            {data?.firstName} {data?.surName}
          </div>
          <div className={styles.info}>
            {`${data?.mrn} . `} {`${data?.sex} . `} {`${data?.age} yrs`}
          </div>
        </div>

        <div className={styles.row1Right}>
          <div className={styles.iconLabels}>
            <Image width={16} height={16} src={consultantImg} />
            <span>{data?.consultant}</span>
          </div>
          <div className={styles.iconLabels}>
            <Image width={16} height={16} src={wardImg} />
            <span>{data?.ward}</span>
          </div>
          <div className={styles.iconLabels}>
            <Image width={16} height={16} src={calendarImg} />
            <span>
              DOA: {data?.edd ? moment(data.doa).format("DD-MMM-YYYY") : "N/A"}
            </span>
          </div>
          <div className={styles.iconLabels}>
            <Image width={16} height={16} src={calendarImg} />
            <span>
              EDD: {data?.edd ? moment(data.edd).format("DD-MMM-YYYY") : "N/A"}
            </span>
          </div>
          <div className={styles.pills}>
            <div className={styles.pill}>{data?.category}</div>
            <div className={styles.pill}>{data?.vte ? "VTE" : "N/A"}</div>
          </div>
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.row2Col1}>
          <div className={`${styles.detail} ${styles.height}`}>
            <div>pc</div>
            <div>{data?.pcDetail}</div>
          </div>
          <div className={`${styles.detail} ${styles.height}`}>
            <div>diagnosis</div>
            <div>{data?.pcDetail}</div>
          </div>
        </div>
        <div className={styles.row2ColN}>
          <div className={`${styles.detail} ${styles.detail2}`}>
            <div>history</div>
            <div>{data?.history}</div>
          </div>
        </div>
        <div className={styles.row2ColN}>
          <div className={`${styles.detail} ${styles.detail2}`}>
            <div>plan</div>
            <div>{data?.plan}</div>
          </div>
        </div>
        <div className={styles.row2ColN}>
          <div className={`${styles.detail} ${styles.detail2}`}>
            <div>procedure</div>
            <div>{data?.procedure}</div>
          </div>
        </div>
      </div>

      <div className={styles.row3}>
        <div className={styles.row3Col1}>
          <div className={styles.detail}>
            <div>investigations</div>
            <div>{data?.investigationDetail}</div>
          </div>
        </div>
        <div className={styles.row3ColN}>
          <div className={`${styles.bloodRow} ${styles.detail3}`}>
            <div className={styles.bloodDateCol}>
              <div>#</div>
              <div>
                {data?.dateOfBloods1
                  ? moment(data.dateOfBloods1).format("DD/M/YYYY")
                  : "N/A"}
              </div>
              <div>
                {data?.dateOfBloods2
                  ? moment(data.dateOfBloods1).format("DD/M/YYYY")
                  : "N/A"}
              </div>
            </div>
            <div className={styles.bloodCol}>
              <div>Hb</div>
              <div>{data?.hb1 || 0.0}</div>
              <div>{data?.hb2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>WC</div>
              <div>{data?.wcc1 || 0.0}</div>
              <div>{data?.wcc2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>Na</div>
              <div>{data?.na1 || 0.0}</div>
              <div>{data?.na2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>K</div>
              <div>{data?.k1 || 0.0}</div>
              <div>{data?.k2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>Ur</div>
              <div>{data?.urea1 || 0.0}</div>
              <div>{data?.urea2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>Cr</div>
              <div>{data?.cr1 || 0.0}</div>
              <div>{data?.cr2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>GFR</div>
              <div>{data?.gfr1 || 0.0}</div>
              <div>{data?.gfr2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>CRP</div>
              <div>{data?.crp1 || 0.0}</div>
              <div>{data?.crp2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>INR</div>
              <div>{data?.inr1 || 0.0}</div>
              <div>{data?.inr2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>PLT</div>
              <div>{data?.platelets1 || 0.0}</div>
              <div>{data?.platelets2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>LacT</div>
              <div>{data?.lactates1 || 0.0}</div>
              <div>{data?.lactates2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>Bili</div>
              <div>{data?.bilirubin1 || 0.0}</div>
              <div>{data?.bilirubin2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>AST</div>
              <div>{data?.ast1 || 0.0}</div>
              <div>{data?.ast2 || 0.0}</div>
            </div>
            <div className={styles.bloodCol}>
              <div>ALT</div>
              <div>{data?.alt1 || 0.0}</div>
              <div>{data?.alt1 || 0.0}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
