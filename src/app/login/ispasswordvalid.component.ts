import { AbstractControl, ValidationErrors } from '@angular/forms';

export class passwordValidator {
  static validatePassword(control: AbstractControl): ValidationErrors | null {
    if (control.root.value.newPassword !== control.value) {
      return {
        passwordMatch: false,
        requiredMatch: control.value,
      };
    }
    return null;
  }

  static checkOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    let password = 'qwerty';
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== password) {
          resolve({
            inCorrectOldPassword: true,
            requiredMatch: password,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
