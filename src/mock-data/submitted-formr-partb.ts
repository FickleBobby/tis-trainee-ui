import { FormRPartB } from "../models/FormRPartB";
import { LifeCycleState } from "../models/LifeCycleState";

export const submittedFormRPartBs: FormRPartB[] = [
  {
    id: "5e972ec9b9b5781b94eb1270",
    traineeTisId: "123",
    forename: "Anthony Mara",
    surname: "Gilliam",
    gmcNumber: "11111111",
    email: "email@email.com",
    localOfficeName: "Health Education England Thames Valley",
    prevRevalBody: "Health Education England Midlands",
    prevRevalDate: "2020-04-22",
    currRevalDate: "2020-04-22",
    programmeSpecialty: "ST3",
    dualSpecialty: "DS",
    work: [
      {
        typeOfWork: "In Post ST1 Dermatology",
        startDate: "2019-01-12",
        endDate: "2019-12-21",
        trainingPost: "Yes",
        site: "Addenbrookes Hospital",
        siteLocation: "Hills Road Cambridge Cambridgeshire"
      },
      {
        typeOfWork: "In Post ST1 Dermatology",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        trainingPost: "Yes",
        site: "Addenbrookes Hospital",
        siteLocation: "Hills Road Cambridge Cambridgeshire"
      }
    ],
    sicknessAbsence: 0,
    parentalLeave: 0,
    careerBreaks: 0,
    paidLeave: 0,
    unauthorisedLeave: 10,
    otherLeave: 0,
    totalLeave: 10,
    isHonest: true,
    isHealthy: true,
    isWarned: true,
    isComplying: true,
    healthStatement: "I feel great etc.",
    havePreviousDeclarations: true,
    previousDeclarations: [
      {
        declarationType: "Significant Event",
        dateOfEntry: "2020-03-07",
        title: "Previous declaration title",
        locationOfEntry: "Previous declaration location of entry"
      }
    ],
    previousDeclarationSummary: "",
    haveCurrentDeclarations: true,
    currentDeclarations: [
      {
        declarationType: "Complaint",
        dateOfEntry: "2020-06-12",
        title: "Current declaration title",
        locationOfEntry: "Current declaration location of entry"
      }
    ],
    currentDeclarationSummary: "",
    compliments: "",
    haveCovidDeclarations: null,
    covidDeclarationDto: null,
    lifecycleState: LifeCycleState.Submitted,
    submissionDate: "2020-04-22",
    lastModifiedDate: "2020-04-15"
  }
];
