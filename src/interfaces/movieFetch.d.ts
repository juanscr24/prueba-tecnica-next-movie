export interface Image {
    url: string;
    width: number;
    height: number;
}

export interface ISeries {
    title: string,
    description: string,
    programType: string,
    images: {
        "Poster Art": Image;
    }
    
    image:string,
    type:string,
}

export type movieArray = ISeries[]
