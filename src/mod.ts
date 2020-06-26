import * as eris from 'eris'

export default class CordKit {
	client = new eris.Client(this.token)

	constructor(private token: string) {}
}
