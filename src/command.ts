/**
 * A set of arguments to be used when generating command invokers.
 */
interface ArgSet {
	/** Positional, ordered arguments. Ex: {command name} {positional[0]} {positional[1]}. */
	positional: string[]
}

/**
 * A generic bot command. Generally, this follows the pattern of {name} {posArg1} "{posArg2 with spaces}",
 * but it can be customised.
 */
export default class Command {
	/**
	 * Contructs Command.
	 * @param name The name of the command.
	 * @param args The default arguments to use if `args` isn't passed to the `test` method.
	 */
	constructor(public name: string, public args?: ArgSet) {}

	/**
	 * Runs the test.
	 * @param args The specific arguments to use for this test. If undefined, the fallback args of the class will be used.
	 */
	test(args?: ArgSet) {}
}
