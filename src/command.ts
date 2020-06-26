interface ArgSet {
	positional: string[]
}

/**
 * A generic bot command. Generally, this follows the pattern of {name} {posArg1} "{posArg2 with spaces}",
 * but it can be customised.
 */
export default class Command {
	constructor(public name: string, public args: ArgSet[]) {}
}
