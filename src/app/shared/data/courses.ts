export interface Course {
  id: number,
  module: string,
  name: string,
  teachers: {name: string}[],
  coef: number,
}

export const courses: Course[] = [
  { id: 0, module: 'cloud', name: 'ARCL', teachers:[{name:'Yannick Neff'}], coef: 3},
  { id: 1, module: 'cloud', name: 'UBSI', teachers:[{name:'Jean-Christophe Ferry'},{name:'Thomas Cordival'}], coef: 1},
  { id: 2, module: 'cloud', name: 'SOAR', teachers:[{name:'Frédéric Fourdrinier'},{name:'Yannick Neff'}], coef: 1},
  { id: 3, module: 'management', name: 'OPCO', teachers:[{name:'Christophe Andreu'}], coef: 2},
  { id: 4, module: 'management', name: 'AMOA', teachers:[{name:'Guillaume Barbier'}], coef: 1},
  { id: 5, module: 'applications', name: 'ARLA', teachers:[{name:'Lucas Boisserie'},{name:'Florent Fauchille'}], coef: 2},
];
