# mors-sub

[Express](http://expressjs.com/) and [mors](https://www.npmjs.com/package/mors) inspired mqtt development framework running as mqtt client.
Compared to mors, mors-sub connects to a broker instead of running a own broker.
Currently it implements only a subset of mors.

## Usage

The module returns a factory which requires an options object.
The following options are available:

- `broker`: The URL to the broker it should connect to.
- `topic`: The topic the client will subscribe to.
  The routing can be used for further separation of the messages.
  (default: `#`)
