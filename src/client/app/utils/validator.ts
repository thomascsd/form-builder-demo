import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { validateSync } from 'class-validator';

export function utilValidator<T extends {}>(model: T, prop: string): ValidatorFn {
  return (control): ValidationErrors | null => {
    let invalid = false;

    model[prop] = control.value;

    const errors = validateSync(model, {
      skipMissingProperties: true,
    });

    if (errors && errors.length) {
      const propError = errors.filter((e) => e.property == prop);

      if (propError.length > 0) {
        const msg = propError.map(({ constraints }) => Object.values(constraints).join(', '));
        invalid = true;

        return { hasError: invalid && (control.dirty || control.touched), msg };
      }
    }

    return null;
  };
}
