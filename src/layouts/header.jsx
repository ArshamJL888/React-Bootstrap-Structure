import { Container, Image, Nav, Navbar, Col } from "react-bootstrap";
import logo from "/images/new logo.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Col md={10}>
            <Navbar.Brand href="#home">
              <Image src={logo} />
            </Navbar.Brand>
          </Col>
          <Col md={2}>
            <Nav className="me-auto">
              <Nav.Link target="_blank" href="https://noorbank.ir">
                {t("Noor Website")}
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
