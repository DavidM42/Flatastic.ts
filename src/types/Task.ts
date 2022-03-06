export interface Task {
    id: number,
    title: string,
    details?: string,
    /** Array of user idS */
    users: Array<number>,
    points: number,
    /** unknown */
    rotationTime: -1,
    currentUser: number,
    /** timestamp */
    lastDoneDate: number,
    /** timestamp */
    creationDate: number,
    fixed: 0 | number,
    /** Negative timestamp */
    timeLeftNext: number
}