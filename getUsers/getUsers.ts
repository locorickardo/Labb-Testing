function getUsers(): Promise<{ name: string; group: number }[]> {
    return Promise.resolve([
      { name: 'Erik', group: 1 },
      { name: 'Lisa', group: 2 },
      { name: 'Hampus', group: 2 },
      { name: 'Linda', group: 3 },
    ]);
  }
  
  export default getUsers;
  