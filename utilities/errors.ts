export function assertUnreachable(_: never): never {
    throw new Error("It looks like we're up the creek...")
}
