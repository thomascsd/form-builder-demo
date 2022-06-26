import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { validateSync } from 'class-validator';

export function utilValidator<T extends {}>(model: T, prop: string): ValidatorFn {
  return (control): ValidationErrors | null => {
    model[prop] = control.value;

    const errors = validateSync(model, {
      skipMissingProperties: true,
    });

    if (errors && errors.length) {
      const msg = errors.map(({ constraints }) => Object.values(constraints).join(', '));

      return { hasError: true, msg };
    }

    return null;
  };
}
