import * as yup from "yup";

// Lead Form Validation Schema
export const validationSchema = yup.object().shape({
    address: yup.string().required("Address is required").min(5, "Please enter a complete address"),
    firstName: yup.string().required("First name is required").min(2, "Name must be at least 2 characters").matches(/^[A-Za-z\s]+$/, "First Name can only contain letters"),
    lastName: yup.string().required("Last name is required").min(2, "Name must be at least 2 characters").matches(/^[A-Za-z\s]+$/, "Last Name can only contain letters"),
    phoneNumber: yup.string().required("Phone number is required").min(14, "Phone number must be at least 10 characters"),
    // phoneNumber: yup.string().required("Phone number is required").matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid phone number"),
    email: yup.string().required("Email is required").email("Please enter a valid email").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:com|edu|org|net|gov)$/, "Please enter a valid email address"),
    insuredBy: yup.string().required("Insurance company is required"),
    policyNumber: yup.string().required("Policy number is required"),
  });

  