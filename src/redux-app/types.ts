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

export interface ISingleArtistApi {
    followers: {
        total: number
    },
    id: string,
    images: {
        url: string
    }[],
    name: string,
    uri: string,
}

export interface ITopTracksApi {
    tracks: {
        album: {
            artists: {
                name: string
            }[],
            images: {
                url: string
            }[]
        },
        external_urls: {
            spotify: string
        },
        name: string,
        preview_url: string,
        uri: string,
    }[]
}