import { Player } from '@/includes/Player'

class GameManager {
    players!: Map<number, Player>;
    materials: Array<String> = new Array<String>();
    questions: Array<String> = new Array<Question>();

    public addMaterial(material: Array<string>): void {
        this.materials = [...material];
    }

    public StartGame(): void {
        this.prepareQuestionsWithAvailableMaterials();

    }

}

export { GameManager };