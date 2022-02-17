import { TIME_RANGE } from "redux-app/constants";

export const followedWrappertabs: Record<string, TIME_RANGE> = {
    'All time': TIME_RANGE.longTerm,
    '6 month': TIME_RANGE.mediumTerm,
    '1 month': TIME_RANGE.shortTerm,
}

export const timeValues = Object.keys(followedWrappertabs);