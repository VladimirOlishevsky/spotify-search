export interface IArtist {
    external_urls: {
        spotify: string
    },
    followers: {
        href: null,
        total: number
    },
    genres: string[],
    href: string,
    id: string,
    images: IImage[],
    name: string,
    popularity: number,
    type: string,
    uri: string
}

interface IImage {
    height: number,
    url: string,
    width: number
}

export interface IArtistsApi {
    artists: {
        items: IArtist[],
    }
}