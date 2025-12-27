/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type ToForm<OriginalType> = {
  [key in keyof OriginalType]: OriginalType[key] extends any[]
    ? FormArray<
        Unpacked<OriginalType[key]> extends object
          ? FormGroup<ToForm<Unpacked<OriginalType[key]>>>
          : FormControl<Unpacked<OriginalType[key]> | null>
      >
    : OriginalType[key] extends object
      ? FormGroup<ToForm<OriginalType[key]>>
      : FormControl<OriginalType[key] | null>;
};
