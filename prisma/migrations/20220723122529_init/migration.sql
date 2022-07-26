-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "surName" TEXT,
    "mrn" TEXT,
    "age" INTEGER,
    "sex" TEXT,
    "ward" TEXT,
    "specialty" TEXT,
    "consultant" TEXT,
    "sho1" TEXT,
    "sho2" TEXT,
    "fy1a" TEXT,
    "fy1b" TEXT,
    "nightSho" TEXT,
    "spr" TEXT,
    "doa" TEXT,
    "pc" TEXT,
    "pcDetail" TEXT,
    "diagnosisOnAdmission" TEXT,
    "diagnosisOnAdmissionDetail" TEXT,
    "confirmedDiagnosis" TEXT,
    "confirmedDiagnosisDetail" TEXT,
    "history" TEXT,
    "plan" TEXT,
    "dateOfSurgery" TEXT,
    "procedure" TEXT,
    "category" TEXT,
    "vte" BOOLEAN,
    "edd" TEXT,
    "deceased" BOOLEAN,
    "dateOfDeath" TEXT,
    "teaching" BOOLEAN,
    "elective" BOOLEAN,
    "takeList" BOOLEAN,
    "weekendList" BOOLEAN,
    "discharged" BOOLEAN,
    "investigation" TEXT,
    "investigationDetail" TEXT,
    "dateOfBloods1" TEXT,
    "hb1" REAL,
    "wcc1" REAL,
    "na1" REAL,
    "k1" REAL,
    "urea1" REAL,
    "cr1" REAL,
    "gfr1" REAL,
    "crp1" REAL,
    "inr1" REAL,
    "platelets1" REAL,
    "lactates1" REAL,
    "bilirubin1" REAL,
    "ast1" REAL,
    "alt1" REAL,
    "alp1" REAL,
    "lip1" REAL,
    "dateOfBloods2" TEXT,
    "hb2" REAL,
    "wcc2" REAL,
    "na2" REAL,
    "k2" REAL,
    "urea2" REAL,
    "cr2" REAL,
    "gfr2" REAL,
    "crp2" REAL,
    "inr2" REAL,
    "platelets2" REAL,
    "lactates2" REAL,
    "bilirubin2" REAL,
    "ast2" REAL,
    "alt2" REAL,
    "alp2" REAL,
    "lip2" REAL,
    "createdAt" TEXT,
    "modifiedAt" TEXT
);
