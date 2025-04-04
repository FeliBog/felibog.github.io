const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TextBox,
		C3.Plugins.Button,
		C3.Plugins.Multiplayer,
		C3.Plugins.Text,
		C3.Plugins.AdvancedRandom,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Keyboard,
		C3.Plugins.LocalStorage,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Multiplayer.Acts.SignallingConnect,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Multiplayer.Cnds.OnSignallingConnected,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.TextBox.Acts.SetEnabled,
		C3.Plugins.Button.Acts.SetEnabled,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.Multiplayer.Acts.SignallingLogin,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Multiplayer.Cnds.OnSignallingLoggedIn,
		C3.Plugins.Multiplayer.Exps.MyAlias,
		C3.Plugins.Multiplayer.Acts.SignallingRequestRoomList,
		C3.Plugins.Multiplayer.Acts.SignallingJoinRoom,
		C3.Plugins.AdvancedRandom.Exps.Seed,
		C3.Plugins.Multiplayer.Cnds.OnSignallingJoinedRoom,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Multiplayer.Exps.CurrentRoom,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.Multiplayer.Cnds.IsHost,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Multiplayer.Exps.MyID,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Multiplayer.Exps.PeerCount,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.Multiplayer.Cnds.OnPeerConnected,
		C3.Plugins.Multiplayer.Exps.PeerAlias,
		C3.Plugins.Multiplayer.Exps.PeerID,
		C3.Plugins.Multiplayer.Cnds.OnPeerDisconnected,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Multiplayer.Cnds.ComparePeerCount,
		C3.Plugins.Multiplayer.Cnds.OnHostDisconnected,
		C3.Plugins.Multiplayer.Acts.KickPeer,
		C3.Plugins.Multiplayer.Acts.DisconnectRoom,
		C3.Plugins.Multiplayer.Cnds.SignallingIsInRoom,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Multiplayer.Acts.HostBroadcastMessage,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.Multiplayer.Cnds.OnPeerMessage,
		C3.Plugins.Multiplayer.Acts.SignallingLeaveRoom,
		C3.Plugins.Multiplayer.Exps.CurrentGame,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Multiplayer.Exps.Message,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Multiplayer.Exps.FromAlias,
		C3.Plugins.Multiplayer.Exps.FromID,
		C3.Plugins.Multiplayer.Acts.SendPeerMessage,
		C3.Plugins.Multiplayer.Exps.HostID,
		C3.Plugins.Multiplayer.Exps.HostAlias,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.TextBox.Acts.AppendText,
		C3.Plugins.TextBox.Acts.ScrollToBottom
	];
};
self.C3_JsPropNameTable = [
	{Name: 0},
	{Login: 0},
	{Multiplayer: 0},
	{Info: 0},
	{RoomName: 0},
	{Go: 0},
	{Create: 0},
	{AdvancedRandom: 0},
	{Info2: 0},
	{Start: 0},
	{Mouse: 0},
	{ID: 0},
	{DragDrop: 0},
	{Sprite: 0},
	{Names: 0},
	{ChatText: 0},
	{Send: 0},
	{Chat: 0},
	{Keyboard: 0},
	{ЛокальноеХранилище: 0},
	{Выход: 0},
	{ActiveRooms: 0},
	{Текст: 0},
	{GAMENAME: 0},
	{ChatLogin: 0},
	{ChatMessage: 0}
];

self.InstanceType = {
	Name: class extends self.ITextInputInstance {},
	Login: class extends self.IButtonInstance {},
	Multiplayer: class extends self.IInstance {},
	Info: class extends self.ITextInstance {},
	RoomName: class extends self.ITextInputInstance {},
	Go: class extends self.IButtonInstance {},
	Create: class extends self.IButtonInstance {},
	AdvancedRandom: class extends self.IInstance {},
	Info2: class extends self.ITextInstance {},
	Start: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Names: class extends self.ITextInstance {},
	ChatText: class extends self.ITextInputInstance {},
	Send: class extends self.IButtonInstance {},
	Chat: class extends self.ITextInputInstance {},
	Keyboard: class extends self.IInstance {},
	ЛокальноеХранилище: class extends self.IInstance {},
	Выход: class extends self.IButtonInstance {},
	ActiveRooms: class extends self.ITextInstance {},
	Текст: class extends self.ITextInstance {}
}