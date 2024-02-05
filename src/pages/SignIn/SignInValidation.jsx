import {number, z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";
function SignInValidation() {

    const {t} = useTranslation();

    const schema = z.object({
        national_code: z.string()
            .min(10, {message: t("National Code Must be 10 Digits")})
            .max(10, {message: t("National Code Must be 10 Digits")}),
        mobile_number: z.string()
            .min(11,{message: t("Mobile Number Must be 11 Digits")})
            .max(11,{message: t("Mobile Number Must be 11 Digits")})
            .regex(/^09[0-9]{9}$/i,{message: t("Mobile Number Format Must be 09XXXXXXXXX")}),
        captcha_code: z.string()
            .min(5, {message: t("Captcha Code Must be Valid")})
            .max(7, {message: t("Captcha Code Must be Valid")})
    })

    return zodResolver(schema);
}

export default SignInValidation;