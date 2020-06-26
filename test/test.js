const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
chai.should()

const { CordKit } = require('..')

describe('CordKit', function () {
    this.timeout(6000)
    
	let ck

	before(function (done) {
		ck = new CordKit(
			process.env.BOT_TOKEN,
			process.env.BOT_ID,
			process.env.CHANNEL_ID
		)

		ck.client.connect()
		ck.client.on('ready', done)
	})

	after(function () {
		ck.client.disconnect()
	})

	describe('#command()', function () {
		it('should return a command with the name of "test"', function () {
			ck.command('test', { positional: ['x', 'y z', 'a', 'b c'] })
				.should.have.property('name')
				.which.equals('test')
		})

		it('should set "test" in the commands map to a command with the name of "test"', function () {
			ck.commands
				.get('test')
				.should.have.property('name')
				.which.equals('test')
		})
	})

	describe('#test()', function () {
		it('should return promises for messages, the first of which is `test x "y z" a "b c"`', function () {
			return ck
				.test()
				.should.eventually.have.property(0)
				.which.should.eventually.have.property('content')
				.which.equals('test x "y z" a "b c"')
		})
	})
})
