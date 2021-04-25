export const required = value => (value ? undefined : 'Required field');
export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
export const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const setMaxLength = (maxLength) => (value) => {
    if (value) {
        if (value.length > maxLength) {
            return `Max length is exceeded`;
        } else {
            return undefined;
        }
    }
}
