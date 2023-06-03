export class Party {
  constructor(
    public name: string,
    public description: string,
    public members: { name: string, dni: string }[],
    public positions: string[]
  ) {}
}
