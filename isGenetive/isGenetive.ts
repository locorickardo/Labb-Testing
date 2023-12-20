function isGenetive(name: string): string {
    if (name.endsWith('s') || name.endsWith('x') || name.endsWith('z')) {
      return `${name}'`;
    } else {
      return `${name}s`;
    }
  }
  
  export default isGenetive;
  