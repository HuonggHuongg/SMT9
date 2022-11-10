export const EMAIL_REQUIRE = "Please enter your email!";
export const EMAIL_WRONG = "Invalid email!!";
export const PASSWORD_REQUIRE = "Please enter your password";
export const PASSWORD_WRONG = "Invalid password!";
export const SUCCESS = "Submit form success"

// export const Validations = () => {
    // const EMAIL_REQUIRE = "Please enter your email!";
    // const EMAIL_WRONG = "Invalid email!!";
    // const PASSWORD_REQUIRE = "Please enter your password";
    // const PASSWORD_WRONG = "Invalid password!";
    // const SUCCESS = "Submit form success"
// }

// export const isValidEmail = (strEmail) => {
//     const regEmail = "[a-zA-Z0-9]{6,32}@[a-z]{2,12}\\.[a-z]{2,12}";
//     if(strEmail === undefined)
//     {
//         return EMAIL_REQUIRE;
//     }
//     else if(strEmail.length=== 0)
//     {
//         return EMAIL_REQUIRE;
//     }
//     else if(!regEmail.test(strEmail))
//     {
//         return EMAIL_WRONG;
//     }
// }

// export const isValidPassWord = (strPass) => {
//     const regPass = "[a-zA-Z0-9{5,31}";
//     if(strPass === undefined)
//     {
//         return PASSWORD_REQUIRE;
//     }
//     else if (strPass.length === 0)
//     {
//         return PASSWORD_REQUIRE;
//     }
//     else if (!strPass.test(regPass))
//     {
//         return PASSWORD_WRONG;
//     }
// }