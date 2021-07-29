// @ts-ignore
export class Competences {
    titre!: string;
    descriptif!: string;
    key!: string;
    niveau!: number;

    constructor(obj?: Partial<Competences>) {
     Object.assign(this, obj);
   }
  }
  