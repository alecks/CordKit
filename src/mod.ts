import * as eris from 'eris'

export default class CordKit {
	client = new eris.Client(this.token)
	// TODO: Use Command type.
	commands = new Map<string, undefined>();

	constructor(private token: string) {}
}
