require "socket"

port = 3000
server = TCPServer.new port
puts "Servidor TCP corriendo en el puerto #{port} ..."

while session = server.accept
  puts "Recibimos nueva conexión ..."
  verb, resource, version = session.gets.split(" ")

  puts "verb....: #{verb}"
  puts "resource: #{resource}"
  puts "version.: #{version}"
  puts

  if version != "HTTP/1.1"
    session.puts "HTTP/1.1 400 Bad Request\n\n<h1>Mensaje no entendido</h1>"
  else
    session.puts "HTTP/1.1 200 OK\n\n<h1>Hola Mundo</h1>"
  end

  session.close
end
