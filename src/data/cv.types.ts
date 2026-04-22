export interface CVUi {
  htmlLang: string;
  titleSuffix: string;
  mainAriaLabel: string;
  sectionAbout: string;
  sectionWork: string;
  sectionEducation: string;
  sectionSkills: string;
  present: string;
  employmentPeriodLabel: string;
  locationAriaLabel: string;
  printBefore: string;
  printAfter: string;
  photoAlt: string;
}

export interface CV {
  name: string;
  title: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  contact: Contact;
  work: Work[];
  education: Education[];
  skills: string[];
  ui: CVUi;
}

export interface Contact {
  email: string;
  tel: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
}

export interface Work {
  company: string;
  title: string;
  start: string;
  end: string | null;
  achievements?: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string | null;
}
