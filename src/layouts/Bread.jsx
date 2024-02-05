import { InputGroup, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Bread() {
  const { t } = useTranslation();

  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    if (location.pathname === "/") setActive(1);
    if (location.pathname === "/validation") setActive(2);
    if (location.pathname === "/account") setActive(3);
    if (location.pathname === "/terms") setActive(4);
    if (location.pathname === "/receipt") setActive(5);
  }, [location]);

  let getClassName = (num) => {
    let cls = "input-group-bread";
    if (num < active) cls += " passed";
    if (num === active) cls += " active";
    return cls;
  };

  const levels = [
    { id: 1, title: t("Enter Information") },
    { id: 2, title: t("Validation") },
    { id: 3, title: t("Submit Information") },
    { id: 4, title: t("Terms and Conditions") },
    { id: 5, title: t("Receipt") },
  ];

  return (
    <>
      <Navbar>
        {levels.map((level) => (
          <InputGroup.Text key={level.id} className={getClassName(level.id)}>
            {level.id + " - " + level.title}
          </InputGroup.Text>
        ))}
      </Navbar>
    </>
  );
}

export default Bread;
