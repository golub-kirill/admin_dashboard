import React, { useEffect } from "react";

export const useInput = (initialValue, validations) => {
	const useValidation = (value, validations) => {
		// const [isExist, setIsExist] = React.useState(false);
		// const [minLengthError, setMinLengthError] = React.useState(true);
		// const [isEmailValid, setIsEmailValid] = React.useState(false);

		const [errors, setErrors] = React.useState({
			isExistError: {
				value: false,
				message: "This field is required",
			},
			minLengthError: {
				value: false,
				message: "This field must be longer",
			},
			isEmailValidError: {
				value: false,
				message: "This field must be valid email",
			},
		});

		useEffect(() => {
			for (const validation in validations) {
				switch (validation) {
					case "required":
						value.length
							? (errors.isExistError.value = false)
							: (errors.isExistError.value = true);
						break;
					case "minLength":
						value.length >= validations.minLength
							? (errors.minLengthError.value = false)
							: (errors.minLengthError.value = true);
						break;
					case "email":
						const regexp =
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						regexp.test(String(value).toLowerCase())
							? (errors.isEmailValidError.value = false)
							: (errors.isEmailValidError.value = true);
						break;
				}
					
			}
		}, [value]);

		return {
			// isExist,
			// minLengthError,
			// isEmailValid,
			errors
		};
	};

	const [value, setValue] = React.useState(initialValue);
	const [isDirty, setIsDirty] = React.useState(false);
	const valid = useValidation(value, validations);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleBlur = (e) => {
		setIsDirty(true);
	};

	return {
		value,
		handleChange,
		handleBlur,
		isDirty,
		...valid,
	};
};
