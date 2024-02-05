import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Col, InputGroup, Row } from "react-bootstrap";
import { BsMailbox, BsShieldLock } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import Captcha from "../../assets/capcha.jpeg";
import { useForm } from "react-hook-form";
import SignInValidation from "./SignInValidation.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StatusAlert from "../../components/StatusAlert.jsx";
import PendingCover from '../../components/PendingCover/PendingCover'
function SignIn() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    let { register, handleSubmit, formState: { errors } } = useForm({ resolver: SignInValidation() });

    const [showError, setShowError] = useState(false)

    const [errorText, setErrorText] = useState("")

    const [showSuccess, setShowSuccess] = useState(false)

    const [isPending, setIsPending] = useState(false)

    const [successText, setSuccessText] = useState("")


    const successHandler = (successBody) => {
        setIsPending(false)
        // when operation is successful ==> set success message and show alert with success theme
        setSuccessText(successBody)
        setShowSuccess(true)
        setTimeout(() => {
            setShowSuccess(false)
            navigate('/validation', { replace: true });
        }, 3000)
    }

    const errorHandler = (errorBody) => {
        setIsPending(false)
        // when operation is NOT successful ==> set error and show alert with danger theme
        setErrorText(errorBody)
        setShowError(true)
        setTimeout(() => {
            setShowError(false)
        }, 5000)
    }

    let onSubmit = async () => {

    }

    return (<div className="mt-5 pt-5">
        <PendingCover pending={isPending} />
        {showError && <>
            <StatusAlert errorBody={errorText} colorType="danger" />
        </>}
        {showSuccess && <>
            <StatusAlert errorBody={successText} colorType="primary" />
        </>}
        <Row className="justify-content-center">
            <Col xs={12} md={9} xl={6} xxl={5}>
                <Card className="center-block">
                    <Card.Header as="h6">
                        <BsShieldLock className="m-2" />
                        {t("Please insert national code and mobile number")}
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <InputGroup className="mb-2">
                                <Form.Label column xs={12} md={3}>
                                    {t('National Code')}
                                </Form.Label>
                                <Col xs={12} md={9}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <BsMailbox />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            isInvalid={errors.national_code}
                                            placeholder={t("National Code 10 digits")}
                                            aria-label={t("National Code 10 digits")}
                                            {...register("national_code")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.national_code && errors.national_code.message}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <Form.Label column xs={12} md={3}>
                                    {t("Mobile Number")}
                                </Form.Label>
                                <Col xs={12} md={9}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <BsShieldLock />
                                        </InputGroup.Text>
                                        <Form.Control
                                            isInvalid={errors.mobile_number}
                                            type="number"
                                            placeholder={t("Mobile Number in 09XXXXXXXXX format")}
                                            aria-label={t("Mobile Number in 09XXXXXXXXX format")}
                                            {...register("mobile_number")}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.mobile_number && errors.mobile_number.message}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <Form.Label column xs={12} md={3}>
                                    {t("Captcha Code")}
                                </Form.Label>
                                <Col xs={8} md={5} lg={5}>
                                    <InputGroup className="mb-6">
                                        <Form.Control
                                            type="text"
                                            isInvalid={errors.captcha_code}
                                            placeholder={t("Captcha Code")}
                                            aria-label={t("Captcha Code")}
                                            {...register("captcha_code")}
                                        />
                                        <InputGroup.Text id="basic-addon1">
                                            <BiRefresh />
                                        </InputGroup.Text>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.captcha_code && errors.captcha_code.message}
                                        </Form.Control.Feedback>

                                    </InputGroup>

                                </Col>
                                <Col xs={2} sm={3}  className="pe-1">
                                    <img style={{
                                        width: 145, 
                                        height: 36,
                                        borderRadius: 3,
                                        border: "1px solid #ced4da",
                                        marginRight: "8px"
                                    }} src={Captcha} alt="captcha" />
                                </Col>
                            </InputGroup>

                            <InputGroup className="justify-content-end">
                                <Button variant="primary" type="submit">
                                    {t("Sign In")}
                                </Button>
                            </InputGroup>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>);
}

export default SignIn;