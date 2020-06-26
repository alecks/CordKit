package cordkit

// CommandContext is the template context that'll be passed to the instantiated template for Tester.CommandTemplate.
type CommandContext struct {
	// Command is the name of the command.
	Command string
	// Args are the ordered, positional arguments passed to the command.
	//
	// Ex: 1 "Hello, world!"
	Args []string
	// KWArgs are the unordered keyword arguments passed to the command.
	//
	// Ex: b="Hello, world!" a=1
	KWArgs map[string]string
}

// Command is a generic command test.
type Command struct {
}
