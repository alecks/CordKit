import eris from 'eris'
import Command, { ArgSet } from './command'

/**
 * CordKit is the main tester.
 * It has an Eris Discord client and contains the commands Map; you should add to this.
 */
export default class CordKit {
	client = new eris.Client(this.token)
	private commands = new Map<string, Command>()

	/**
	 * Constructs CordKit.
	 * @param token The tester's bot token.
	 * @param botID The ID of the bot to test.
	 */
	constructor(
		private token: string,
		public botID: string,
		public channelID: string,
		public invokerGenerator = CordKit.defaultInvokerGenerator
	) {}

	private static defaultInvokerGenerator(cmdName: string, args?: ArgSet) {
		return `${cmdName} ${args?.positional.map(arg =>
			' ' + arg.includes(' ') ? `"${arg}"` : arg
		)}`
	}

	command(name: string, args?: ArgSet): Command {
		const cmd = new Command(this, name, args)
		this.commands.set(name, cmd)
		return cmd
	}
}
