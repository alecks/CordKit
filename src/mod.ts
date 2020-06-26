import * as eris from 'eris'
import Command from './command'

/**
 * CordKit is the main tester.
 * It has an Eris Discord client and contains the commands Map; you should add to this.
 */
export default class CordKit {
	client = new eris.Client(this.token)
	commands = new Map<string, Command>()

	/**
	 * Constructs CordKit.
	 * @param token The tester's bot token.
	 * @param botID The ID of the bot to test.
	 */
	constructor(private token: string, public botID: string) {}
}
