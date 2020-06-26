import CordKit from './mod'
import Eris from 'eris'

/**
 * A set of arguments to be used when generating command invokers.
 */
export interface ArgSet {
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
	 * @param cordkit The [[CordKit]] instance that'll be used for the command.
	 * @param name The name of the command.
	 * @param args The default arguments to use if `args` isn't passed to the `test` method.
	 * @param channelID The ID of the channel to execute commands in. Falls back to cordkit.channelID.
	 */
	constructor(
		private cordkit: CordKit,
		public name: string,
		public args?: ArgSet,
		public channelID?: string
	) {}

	/**
	 * Runs the test.
	 * @param args The specific arguments to use for this test. If undefined, the fallback args of the class will be used.
	 */
	async test(args = this.args) {
		const invoker = this.cordkit.invokerGenerator(this.name, args)
		const channel = this.cordkit.client.getChannel(
			this.channelID || this.cordkit.channelID
		)
		if (!(channel instanceof Eris.TextChannel)) throw new TypeError("channel isn't instanceof Eris.TextChannel");

		// TOOD: Add a wrapper over eris.Message that includes operations that make testing easier. This is WIP.
		return channel.createMessage(invoker);
	}
}
