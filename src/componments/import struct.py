import struct 
import socket 

temp = 37
latitude = 37.8
longitude = -123
altitude = 10.8
rss = -132
soc = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
soc.connect(('192.168.112.194', 12345))
data = struct.pack('b4f',temp,latitude,longitude,altitude,rss)
print(data)
soc.send(data)
soc.close()