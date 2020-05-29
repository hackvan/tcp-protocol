# HTTP basic examples inside the TCP layer

These are examples with Node and Ruby for try to make a (very) basic HTTP server to return responses for the HTTP/1.1 protocol version.

## Requirements:

```bash
$ node -v
v10.16.0

$ ruby -v
ruby 2.6.3p62
```

## Run the Servers:

### Javascript

```bash
$ node node/index.js
```

### Ruby

```bash
$ ruby ruby/server.rb
```

## Try with:

- Web Browser

  [http://localhost:3000](http://localhost:3000)

- Telnet CLI
  ```bash
  $ telnet localhost 3000
  Trying 127.0.0.1...
  Connected to localhost.
  Escape character is '^]'.
  ```
  Type in: `GET / HTTP/1.1`

  Return:
  ```bash
  HTTP/1.1 200 OK

  <h1>Hola Mundo</h1>Connection closed by foreign host.
  ```

## Resources:
1. [Make It Real - Tutorial](https://www.youtube.com/watch?v=rcrb-i86ohE)
1. [Ruby Docs - Sockets](https://ruby-doc.org/stdlib-2.5.3/libdoc/socket/rdoc/TCPServer.html)