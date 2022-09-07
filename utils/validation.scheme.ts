import * as yup from "yup";

export const loginInputScheme = yup.object().shape({
  email: yup.string().required("Обязательное поле").email("Некорректный Email"),
  password: yup.string().required("Обязательное поле"),
});

export const registerInputScheme = yup.object().shape({
  email: yup.string().required("Обязательное поле").email("Некорректный Email"),
  username: yup.string().required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(4, ({ min }) => `Мин. длина ${min} символов`),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
});
