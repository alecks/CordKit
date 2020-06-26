package cordkit

// Args are the ordered, positional arguments passed to the command.
//
// Ex: 1 "Hello, world!"
type Args = []string

// KWArgs are the unordered keyword arguments passed to the command.
//
// Ex: b="Hello, world!" a=1
type KWArgs = map[string]string

// CommandContext is the template context that'll be passed to the instantiated template for Tester.CommandTemplate.
type CommandContext struct {
	// Command is the name of the command.
	Command string
	Args    Args
	KWArgs  KWArgs
}

// Command is a generic command test.
type Command struct {
	Args   Args
	KWArgs KWArgs
}
