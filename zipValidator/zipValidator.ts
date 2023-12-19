function zipValidator(zipCode: string): boolean {
    const zipCodePattern = /^\d{5}$/;
    return zipCodePattern.test(zipCode);
  }
  
  export default zipValidator;