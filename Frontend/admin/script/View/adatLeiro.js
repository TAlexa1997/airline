export const adatLeiro = {
  id: "ID",
  repulogep_neve: "Repűlőgép neve",
  orszagbol: "Országból",
  orszagba: "Országba",
  ind_datum: "Indulási dátum",
  erk_datum: "Érkezési dátum",
  szabad_hely: "Szabad helyek száma",
};

export const adatLeiras = {
  id: {
    megjelenes: "id",
    tipus: "number",

    required: false,
  },
  name: {
    megjelenes: "Repülőgép társaság",
    tipus: "text",
    placeholder: "Repülőgép társaság",
    pattern: "[A-Z][a-z]:6",
    value: "",
    szoveg: "Legalább 6 betű,a társaságnévnek nagybetűvel kell kezdődnie!",
    required: true,
  },
  country: {
    megjelenes: "Országból",
    tipus: "text",
    placeholder: "Országból",
    pattern: "[A-Z][a-z]:6",
    value: "",
    szoveg: "Legalább 6 betű,az országnévnek nagybetűvel kell kezdődnie!",
    required: true,
  },
  from_country: {
    megjelenes: "Országba",
    tipus: "text",
    placeholder: "Országba",
    value: "",
    szoveg: "Legalább 6 betű,az országnévnek nagybetűvel kell kezdődnie!",
    required: true,
  },
  ind_datum: {
    megjelenes: "Indulási dátum",
    tipus: "date",
    szoveg: "2024 és 2025 között kell lennie!",
    required: false,
  },
  erk_datum: {
    megjelenes: "Érkezési dátum",
    tipus: "date",
    szoveg: "2024 és 2025 között kell lennie!",
    required: false,
  },
  szabad_hely: {
    megjelenes: "Szabad hely",
    tipus: "number",
    placeholder: "100",
    required: false,
  },
};
