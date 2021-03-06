export enum Gender {
    MALE, FEMALE
};

export class Modality {
    private id: number;
    private static nextId: number = 0;

    constructor(private sport: string, private gender: Gender) {
        this.id = Modality.nextId;
        Modality.nextId++;
    }

    public getSport(): string {
        return this.sport;
    }

    public getGender(): Gender {
        return this.gender;
    }

    public getGenderToString(): string {
        if (this.gender == Gender.MALE) {
            return 'Masculino';
        } else {
            return 'Feminino';
        }
    }

    public getFullName(): string {
        return (this.sport + " " + this.getGenderToString());
    }

    public getId(): number {
        return this.id;
    }

    public equals(modality: Modality): boolean {
        return this.id === modality.id;
    }
}
