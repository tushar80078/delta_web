import * as yup from "yup";


const emailValidation = yup
    .string()
    .required("Email required")
    .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email"
    );

const passwordValidation = yup
    .string()
    .required("Password required")

export const LoginSchema = yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
});

export const CreateCourseSchema = yup.object().shape({
    courseName: yup.string().required("Please enter Course Name"),
    courseDescription: yup.string().required("Please enter Description"),
    courseScore: yup.string().required("Please enter Course Score"),
    categories: yup.array().required("At least one category required"),
    isCourseFree: yup
        .string()
        .required("Please specify if the course is free"),
    courseFees: yup.number().when("isCourseFree", {
        is: (isCourseFree) => isCourseFree == "false",
        then: () => yup.number().required("Course fees required when Course is not Free"),
    })
});

export const CreateCategorySchema = yup.object().shape({
    categoryName: yup.string().required("Please enter Category Name"),
})