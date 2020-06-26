package cordkit

import (
	"context"

	"github.com/andersfylling/disgord"
)

// Tester is a CordKit client.
type Tester struct {
	// BotID is the ID of the bot to test.
	BotID disgord.Snowflake
	// ChannelID is the channel to execute commands in.
	ChannelID disgord.Snowflake
	// CommandTemplate is template string that'll be used when forming command calls. It'll be used in a
	// text/template.Template where the context will be a CommandContext.
	CommandTemplate string
	// Token is the bot token that'll be used by the tester.
	Token string
	// Client is the Disgord client to use. When you call Connect, this will be created automatically *if* it doesn't
	// already exist.
	Client *disgord.Client
}

// Connect assigns the Tester a *disgord.Client and connects to Discord.
// This will block until interrupted; StayConnectedUntilInterrupted is called.
func (t *Tester) Connect(ctx context.Context) error {
	if t.Client == nil {
		t.Client = disgord.New(disgord.Config{
			BotToken: t.Token,
		})
	}
	return t.Client.StayConnectedUntilInterrupted(ctx)
}
